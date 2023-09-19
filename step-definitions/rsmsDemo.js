//import { Given, When, Then } from '@cucumber/cucumber';
const { Given, When, Then } = require('@wdio/cucumber-framework');
//const { assert } = require('chai');
const LoginPage = require ('../pageobjects/rsmsDemo.page.js');




Given(/^user navigates from rajagiritech home page to the student login page$/, async() => {
	await browser.maximizeWindow();
	await LoginPage.open()
});

When(/^user enters (.*) and (.*)$/, async(username,password) => {
    //await LoginPage.IntoLoginPage.click();
   // await browser.switchWindow("//a[@href='https://www.rajagiritech.ac.in/stud/ktu/student/']");
    await LoginPage.login(username,password);

});
Then(/^the user is logged into their account and (.*) is displayed$/, async(message) => {
	await expect(browser).toHaveUrlContaining(message);
    if(message==="Home.asp")
    {
        await $("//*[@href='Notice.asp']").click();
    browser.back();
    await $("//a[@href='Leave.asp']").click();
    await $("//*[@id='list1'][@class='ibox']").click();
    await $("//option[@value='2019S1CS-C']").click();
    await $("//a[@href='Logout.asp']").click();
    }
    else
    {    
        return true;
        //browser.close();
    }
});

