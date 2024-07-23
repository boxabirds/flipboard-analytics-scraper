const puppeteer = require('puppeteer');
const fs = require('fs').promises;

async function loginToFlipboard(email, password) {
  const browser = await puppeteer.launch({headless: false}); // Set to true for headless mode
  const page = await browser.newPage();

  try {
    // Navigate to the login page
    await page.goto('https://flipboard.com/login', {waitUntil: 'networkidle0'});

    // Handle cookie consent in iframe
    const frameHandle = await page.waitForSelector('iframe[id^="sp_message_iframe"]');
    const frame = await frameHandle.contentFrame();

    const consentSelector = 'button[aria-label="Accept"]';
    await frame.waitForSelector(consentSelector, {visible: true, timeout: 5000});
    await frame.click(consentSelector);

    // Wait for the email input field and enter email
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]', email);


    // Wait for the password input field and enter password
    await page.waitForSelector('input[type="password"]');
    await page.type('input[type="password"]', password);

    // Click the login button
    const loginButtonSelector = 'button[type="submit"][data-vars-button-name="login__form-submit"]';
    await page.waitForSelector(loginButtonSelector);
    await page.click(loginButtonSelector);

    // Wait for navigation to complete after login
    await page.waitForNavigation({waitUntil: 'networkidle0'});

    console.log('Successfully logged in!');

    await page.goto('https://flipboard.com/@boxabirds/magazines/flipboard%2Fcurator%2Fmagazine%2FoCHVXBz4SlO6CeYIWZL6OQ%3Am%3A13046632/analytics', {waitUntil: 'networkidle0'});
    console.log('Navigated to analytics page');


    await page.waitForSelector('table.analytics__table');

    // Extract table data
    const tableData = await page.evaluate(() => {
      const rows = Array.from(document.querySelectorAll('table.analytics__table tbody tr'));
      return rows.map(row => {
        const cells = Array.from(row.querySelectorAll('th, td'));
        return {
          urlTitle: cells[0].innerText,
          impressions: cells[1].innerText,
          opens: cells[2].innerText,
          ctr: cells[3].innerText
        };
      });
    });

    console.log('Extracted table data:', tableData);

    return tableData;


  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the browser
    await browser.close();
  }
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


if (process.argv.length < 4) {
  console.error('Usage: node script.js <email> <password>');
  process.exit(1);
}

const email = process.argv[2];
const password = process.argv[3];


loginToFlipboard(email, password)
.then(data => {
  console.log('Processed data:', data);
  return saveDataToJson(data);
})
.then(() => {
  console.log('Script execution completed successfully');
})
.catch(error => {
  console.error('Script execution failed:', error);
});

