const { Given, When, Then } = require('@wdio/cucumber-framework');

const { assert } = require('chai');

Given(/^user navigates from rajagiritech home page to the student login page$/, async() => {
	await browser.maximizeWindow();
	browser.url('https://www.rajagiritech.ac.in/Home/Index.asp');
});


When(/^user enters (.*) and (.*)$/, async(username,password) => {
    await $("//a[@href='https://www.rajagiritech.ac.in/stud/ktu/student/']").click();
    await browser.switchWindow('https://www.rajagiritech.ac.in/stud/ktu/student/');
    await $("//input[@name='Userid'][@class='ibox']").setValue(username);
await $("//input[@name='Password'][@class='ibox']").setValue(password);	
});



When(/^clicks on login button$/, async() => {
    //submit button
	await $("//input[@type='submit'][@class='ibox1']").click();	
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


// Then(/^the user is logged into their account (.*)$/, async(message) => {   
//error to be resolved
    //the first test case is of an invalid user id and password in that test case the second xpath 
    //locator will not get recognised
    //the second test case is of a happy path with valid credentials, but the if statement wil not get executed
// if(assert.include(await $("//form[@method='POST'][@action='varify.asp']//div[@class='descr']").getText(),"Incorrect Login or Session timed out!!!!!","assertion not true"))
// {
//     browser.close();
// }
// else (assert.include(await $('//*[@id="printsections"]/div[1]').getText(),"STUDENT'S CORNER","not valid creadentials"))
// {
//     await $("//*[@href='Notice.asp']").click();
//     browser.back();
//     await $("//a[@href='Leave.asp']").click();
//     await $("//*[@id='list1'][@class='ibox']").click();
//     await $("//option[@value='2019S1CS-C']").click();
//     await $("//a[@href='Logout.asp']").click();
// }
//     browser.close();
// 
// });
