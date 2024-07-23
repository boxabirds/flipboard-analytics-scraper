const puppeteer = require('puppeteer'); // v22.0.0 or later

(async () => {
    let browser = null;
    try {
        const browser = await puppeteer.launch({
            headless: false, // Set to true for headless mode
            defaultViewport: null // Use default viewport of the browser
        });
            const page = await browser.newPage();
        const timeout = 5000;
        if (page) {
            page.setDefaultTimeout(timeout);
            // Navigate to a simple page as a test
            await page.goto('https://example.com');
        } else {
            console.error('Failed to create a page.');
        }
    } catch (err) {
        console.error('Error occurred:', err);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})().catch(err => {
    console.error('Unhandled error:', err);
    process.exit(1);
});
