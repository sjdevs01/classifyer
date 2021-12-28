const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

let { email, pass } = require('./config')

puppeteer.use(StealthPlugin());
const joinMeeting = async (link, leaveTime) => {
    try{
        const browser = await puppeteer.launch({headless:false,args:["--enable-automation"]});
        // const browser = await puppeteer.launch({headless: true,args: ["--disable-notifications", "--mute-audio", "--enable-automation"],ignoreDefaultArgs: true});
        const page = await browser.newPage();
        const navigationPromise = page.waitForNavigation();
        await page.goto("https://accounts.google.com/");
        const context = browser.defaultBrowserContext();
        await context.overridePermissions("https://meet.google.com/", ["microphone", "camera", "notifications"]);
        await navigationPromise;
        await page.waitForSelector('input[type="email"]');
        await page.click('input[type="email"]');
        await navigationPromise;
        console.log('yeah')
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
        
        // Join Now
        for (i=1; i<=7; i++) {
            await page.keyboard.press('Tab');
            await page.waitForTimeout(100);
        }
        await page.keyboard.press('Enter');
        await navigationPromise;
        console.log(leaveTime)
        setTimeout(async () => {
            await browser.close();
        }, leaveTime)
    }catch(err){
        console.log(err)
    }
}

module.exports = joinMeeting