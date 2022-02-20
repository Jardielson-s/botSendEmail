import puppeteer from 'puppeteer';
import stealth from 'puppeteer-extra-plugin-stealth'
import puppeteerExtra from 'puppeteer-extra';

interface T {
    puppeter: puppeteer.Page;
    cookies: object;
}
interface Credentials {
    user: string;
    passsword: string;
}
interface BodyEmaail {
    author: string;
    subject: string;
    email: string;
    recipient: string;
    data: Date;
}

class Puppeteer {

    constructor() {

    }

    async startingPuppeter(user: Credentials): Promise<T> {
        const url: string = 'https://mail.google.com';
        const dataAccess = {
            email: 'input[type="email"]',
            password: 'input[type="password"]'
        }
        puppeteerExtra.use(stealth());
        const browser = await puppeteerExtra.launch({ headless: false });
        const page = await browser.newPage();

        await page.goto(process.env.URL_GMAIL_LOGIN || url);
        await page.waitForSelector(dataAccess.email);
        await page.type(dataAccess.email, user.user);
        await Promise.all([page.keyboard.press('Enter')]);


        await page.waitForSelector(dataAccess.password, { visible: true });
        await page.type(dataAccess.password, user.passsword);
        await Promise.all([page.keyboard.press('Enter')]);
        await page.waitForNavigation();

        const cookies = await page.cookies();
        const datas: T = {
            puppeter: page || null,
            cookies: cookies || null
        }

        return datas;
    }
    private async closePuppeter(browser: puppeteer.Page) {
        await browser.close();
    }

    async sendEmail(bodyEmail: BodyEmaail, credential: Credentials): Promise<Object> {
        const datas = this.startingPuppeter(credential);
        const properties = {
            compose: ".T-I.T-I-KE.L3",
            div: 'div[class=".nH Hd"]',
            recipient: 'textarea[class=".v0"]',
            subject: 'input[class=".aoT"]',
            message: 'div[class=".Am.Al.editable.LW-avf.tS-tW"',
            send: 'div[class=".T-I.J-J5-Ji.aoO.v7.T-I-atl.L3"'
        };
        const corp = bodyEmail;
        await (await datas).puppeter.click(properties.compose);

        //console.log(form)
        //await (await datas).puppeter.waitForSelector(properties.div);
        //await (await datas).puppeter.waitForNavigation();
        //await (await datas).puppeter.waitForSelector(properties.recipient);
        //await (await datas).puppeter.type(properties.recipient, bodyEmail.recipient);
        //await (await datas).puppeter.waitForNavigation();
        //await (await datas).puppeter.waitForSelector(properties.subject);
        //await (await datas).puppeter.type(properties.subject, properties.subject);
        //await (await datas).puppeter.waitForNavigation();
        //await (await datas).puppeter.waitForSelector(properties.message);
        //await (await datas).puppeter.type(properties.message, bodyEmail.email);
        //await (await datas).puppeter.waitForNavigation();
        //await (await datas).puppeter.waitForSelector(properties.send);
        //await (await datas).puppeter.click(properties.send);


        //ecrever .vO
        //assunto .aoT
        //message .Am.Al.editable.LW-avf.tS-tW
        //enviar .T-I.J-J5-Ji.aoO.v7.T-I-atl.L3 
        //this.closePuppeter((await datas).puppeter);
        return {};
    }

}

const puppe = new Puppeteer();

export default puppe;