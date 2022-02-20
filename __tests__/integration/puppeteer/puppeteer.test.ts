import pupp from '../../../sendEmailMicroService/src/services/Puppeteer';
jest.setTimeout(80000);

describe('testing puppeteer functions', () => {
    it('login gmail', async () => {
        //const page = await pupp.startingPuppeter({ user: 'jsonsilva20@gmail.com', passsword: 'json*31415' });
        //expect(page.cookies).not.toBeNull();
    })

    it('send email', async () => {
        const data = await pupp.sendEmail({
            author: 'json silva', subject: 'teste puppeter',
            email: 'hello jardielson',
            recipient: 'jardielsonbio@gmail.com',
            data: new Date()
        }, { user: 'jsonsilva20@gmail.com', passsword: 'json*31415' });


    });
})