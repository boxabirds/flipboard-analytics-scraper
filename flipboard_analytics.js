const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

async function loginToFlipboardAndExtractAnalytics(email, password) {
  const browser = await puppeteer.launch({headless: false}); // Set to true for headless mode
  const page = await browser.newPage();

  try {
    // Login process (unchanged)
    await page.goto('https://flipboard.com/login', {waitUntil: 'networkidle0'});
    const frameHandle = await page.waitForSelector('iframe[id^="sp_message_iframe"]');
    const frame = await frameHandle.contentFrame();
    const consentSelector = 'button[aria-label="Accept"]';
    await frame.waitForSelector(consentSelector, {visible: true, timeout: 5000});
    await frame.click(consentSelector);
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]', email);
    await page.waitForSelector('input[name="password"]');
    await page.type('input[name="password"]', password);
    const loginButtonSelector = 'button[type="submit"][data-vars-button-name="login__form-submit"]';
    await page.waitForSelector(loginButtonSelector);
    await page.waitForFunction(
      (selector) => !document.querySelector(selector).disabled,
      {},
      loginButtonSelector
    );
    await page.click(loginButtonSelector);
    await page.waitForNavigation({waitUntil: 'networkidle0'});
    console.log('Successfully logged in!');

    // Navigate to the analytics page
    await page.goto('https://flipboard.com/@boxabirds/magazines/flipboard%2Fcurator%2Fmagazine%2FoCHVXBz4SlO6CeYIWZL6OQ%3Am%3A13046632/analytics', {waitUntil: 'networkidle0'});
    console.log('Navigated to analytics page');

    // Extract table data
    const tableData = await page.evaluate(() => {
      const rows = Array.from(document.querySelectorAll('table.analytics__table tbody tr'));
      return rows.map(row => {
        const cells = Array.from(row.querySelectorAll('th, td'));
        return {
          urlTitle: cells[0].querySelector('a').href,
          impressions: cells[1].innerText,
          opens: cells[2].innerText,
          ctr: cells[3].innerText
        };
      });
    });

    console.log('Extracted table data:', tableData);
    return { tableData, browser };
  } catch (error) {
    console.error('An error occurred:', error);
    await browser.close();
    throw error;
  }
}

async function downloadArticles(tableData, browser) {
  const page = await browser.newPage();
  try {
    // Create 'articles' folder if it doesn't exist
    const articlesDir = path.join(process.cwd(), 'articles');
    await fs.mkdir(articlesDir, { recursive: true });

    // Navigate to each URL and save the HTML
    for (const item of tableData) {
      const fileName = sanitizeFileName(item.urlTitle) ;
      const filePath = path.join(articlesDir, fileName);

      // Check if file already exists
      const fileExists = await fs.stat(filePath).then(() => true).catch(() => false);
      if (fileExists) {
        console.log(`File ${fileName} already exists. Skipping.`);
        continue;
      }

      // Navigate to the URL
      await page.goto(item.urlTitle, { waitUntil: 'networkidle0' });
      console.log(`Navigated to: ${item.urlTitle}`);

      // Get the HTML content
      const html = await page.content();

      // Save the HTML content
      await fs.writeFile(filePath, html);
      console.log(`Saved HTML to: ${filePath}`);
    }
  } catch (error) {
    console.error('An error occurred while downloading articles:', error);
  } finally {
    await browser.close();
  }
}

function sanitizeFileName(url) {
  // Remove protocol and domain
  let fileName = url.replace(/^https?:\/\/[^\/]+/, '');

  // Remove trailing slash if present
  fileName = fileName.replace(/\/$/, '');

  // Split the remaining path and take the last part
  const parts = fileName.split('/');
  fileName = parts[parts.length - 1];

  // If the fileName is empty (e.g., the URL ended with a /), use the second-to-last part
  if (!fileName && parts.length > 1) {
    fileName = parts[parts.length - 2];
  }

  // Remove file extension if present (e.g., .html, .php)
  fileName = fileName.replace(/\.[^/.]+$/, "");

  // Replace any remaining non-alphanumeric characters with hyphens
  fileName = fileName.replace(/[^a-z0-9]+/gi, '-').toLowerCase();

  // Remove leading and trailing hyphens
  fileName = fileName.replace(/^-+|-+$/g, '');

  // Ensure the filename is not empty
  if (!fileName) {
    // print out what url failed because this is a real problem with article collisions
    console.log(`Failed to sanitize filename for URL: ${url}`);
    fileName = 'article';
  }

  // Add .html extension
  return fileName + '.html';
}
async function saveDataToJson(data) {
  const date = new Date();
  const fileName = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-analytics.json`;
  
  try {
    await fs.writeFile(fileName, JSON.stringify(data, null, 2));
    console.log(`Data successfully written to ${fileName}`);
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

// Main execution
if (process.argv.length < 4) {
  console.error('Usage: node script.js <email> <password>');
  process.exit(1);
}

const email = process.argv[2];
const password = process.argv[3];

loginToFlipboardAndExtractAnalytics(email, password)
  .then(async ({ tableData, browser }) => {
    console.log('Processed data:', tableData);
    await saveDataToJson(tableData);
    console.log('Starting article download...');
    await downloadArticles(tableData, browser);
  })
  .then(() => {
    console.log('Script execution completed successfully');
  })
  .catch(error => {
    console.error('Script execution failed:', error);
  });