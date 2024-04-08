// const puppeteer = require('puppeteer-core');
// const fs = require('fs');
// const { toMatchImageSnapshot } = require('jest-image-snapshot');

// expect.extend({ toMatchImageSnapshot });

// describe('Visual Regression Tests', () => {
//   let browser;
//   let page;

//   beforeAll(async () => {
//     browser = await puppeteer.launch();
//     page = await browser.newPage();
//     await page.goto('http://localhost:3000'); // URL вашего приложения
//   });

//   afterAll(async () => {
//     await browser.close();
//   });

//   test('AddAdvertisementForm snapshot', async () => {
//     const element = await page.$('.AddAdvertisementForm');
//     const screenshot = await element.screenshot();
//     expect(screenshot).toMatchImageSnapshot();
//   });

//   test('AdvertisementList snapshot', async () => {
//     const element = await page.$('.AdvertisementList');
//     const screenshot = await element.screenshot();
//     expect(screenshot).toMatchImageSnapshot();
//   });
// });






// const puppeteer = require('puppeteer-core');

// describe('Visual Regression Tests', () => {
//   let browser;
//   let page;

//   beforeAll(async () => {
//     browser = await puppeteer.launch({ executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe' });
//     page = await browser.newPage();
//     await page.goto('http://localhost:3000'); // Replace with your application URL
//   });

//   afterAll(async () => {
//     await browser.close();
//   });

//   test('AddAdvertisementForm snapshot', async () => {
//     // Try to find the element with the specified class within the timeout
//     let element;
//     try {
//       element = await page.waitForSelector('.AddAdvertisementForm', { timeout: 10000 });
//     } catch (error) {
//       // Handle case when element is not found within the timeout
//       fail('Timeout exceeded while waiting for element .AddAdvertisementForm to appear');
//     }

//     // If element is found, capture the screenshot
//     const screenshot = await element.screenshot();
//     expect(screenshot).toMatchImageSnapshot();
//   });
  
//   test('AdvertisementList snapshot', async () => {
//     // Try to find the element with the specified class within the timeout
//     let element;
//     try {
//       element = await page.waitForSelector('.AdvertisementList', { timeout: 10000 });
//     } catch (error) {
//       // Handle case when element is not found within the timeout
//       fail('Timeout exceeded while waiting for element .AdvertisementList to appear');
//     }

//     // If element is found, capture the screenshot
//     const screenshot = await element.screenshot();
//     expect(screenshot).toMatchImageSnapshot();
//   });
// });








// const puppeteer = require('puppeteer-core');
// const fs = require('fs');
// const pixelmatch = require('pixelmatch');
// const { PNG } = require('pngjs');
// const path = require('path');
// jest.setTimeout(15000);
// test('Visual regression test', async () => {
//   const browser = await puppeteer.launch({ executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe' });
//   const page = await browser.newPage();

//   const beforeImagePath = path.join(__dirname, 'before.png');
//   const afterImagePath = path.join(__dirname, 'after.png');
//   const diffImagePath = path.join(__dirname, 'diff.png');
  
//   // Открываем страницу и делаем скриншот "до" добавления объявления
//   await page.goto('http://yourwebsite.com');
//   await page.setViewport({ width: 1200, height: 800 });
//   await page.screenshot({ path: beforeImagePath });

//   // Добавляем объявление
//   await page.waitForSelector('input[placeholder="Title"]');
//   await page.type('input[placeholder="Title"]', 'Test Title');
//   await page.type('textarea[placeholder="Content"]', 'Test Content');
//   await page.click('button.submit');
//   await page.waitForSelector('.card-title'); // Подождать загрузки объявления

//   // Делаем скриншот "после" добавления объявления
//   await page.screenshot({ path: afterImagePath });

//   // Сравниваем скриншоты
//   const img1 = PNG.sync.read(fs.readFileSync(beforeImagePath));
//   const img2 = PNG.sync.read(fs.readFileSync(afterImagePath));
//   const { width, height } = img1;
//   const diff = new PNG({ width, height });

//   pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });

//   fs.writeFileSync(diffImagePath, PNG.sync.write(diff));

//   // Проверяем, есть ли отличия в скриншотах
//   const numDiffPixels = diff.data.reduce((acc, pixel) => acc + (pixel !== 0 ? 1 : 0), 0);
//   console.log('Number of different pixels:', numDiffPixels);

//   await browser.close();
// });
