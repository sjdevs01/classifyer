const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

let { email, pass } = require('./config')

puppeteer.use(StealthPlugin());
const joinMeeting = async (link, leaveTime, classNm) => {
    try{
        const browser = await puppeteer.launch({headless:false,args:["--enable-automation"]});
        const page = await browser.newPage();
        const navigationPromise = page.waitForNavigation();
        await page.goto("https://accounts.google.com/");
        const context = browser.defaultBrowserContext();
        await context.overridePermissions("https://meet.google.com/", ["microphone", "camera", "notifications"]);
        await navigationPromise;
        await page.waitForSelector('input[type="email"]');
        await page.click('input[type="email"]');
        await navigationPromise;
        await page.keyboard.type(`${email}`, { delay: 50 }); 
        await page.waitForTimeout(500);
        await page.waitForSelector("#identifierNext");
        await page.click("#identifierNext");
        await page.waitForTimeout(2500);
        await page.keyboard.type(`${pass}`, { delay: 50 }); 
        await page.waitForTimeout(800);
        await page.keyboard.press('Enter');
        await navigationPromise;
        await page.waitForTimeout(3500);
        await page.goto(`${link}`);
        await page.waitForTimeout(5000);
        await page.keyboard.down('ControlLeft');
        await page.keyboard.press('KeyE');
        await page.keyboard.up('ControlLeft');
        await page.waitForTimeout(100);
        await page.waitForTimeout(100);
        await page.keyboard.down('ControlLeft');
        await page.keyboard.press('KeyD');
        await page.keyboard.up('ControlLeft');
        await page.waitForTimeout(1000);
        for (i=1; i<=7; i++) {
            await page.keyboard.press('Tab');
            await page.waitForTimeout(100);
        }
        await page.keyboard.press('Enter');
        await navigationPromise;
        setTimeout(async () => {
            if(classNm == 'math'){
                await page.goto("https://docs.google.com/forms/d/e/1FAIpQLSf98lz9Z0qGd6uqKxem5miuZSjkZV7D8jgJgg0l0J9-r2NQJw/viewform")
                await navigationPromise;
                await page.waitForSelector('input[type="text"]');
                await page.click('input[type="text"]');
                await navigationPromise;
                await page.evaluate( () => document.querySelector('input[type="text"]').value = "")
                await page.keyboard.type(`Shivansh Jaiswal`, { delay: 50 });
                await page.waitForTimeout(500);
                let options = await page.$$('.docssharedWizToggleLabeledLabelWrapper');
                options.forEach(async  i => {
                    let text = await (await i.getProperty('textContent')).jsonValue();
                    console.log(text)
                    if(text.includes('D')) {
                        await i.click();
                    }
                })
                await page.waitForTimeout(500);
                await page.waitForSelector('div[role="button"]');
                await page.click('div[role="button"]');
                await browser.close();
            }else{
                await browser.close();
            }
        }, leaveTime)
        return 200;
    }catch(err){
        return 400;
    }
}

module.exports = joinMeeting
