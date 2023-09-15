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
	await $("//input[@type='submit'][@class='ibox1']").click();	
});



Then(/^the user is logged into their account$/, async() => {
     //let actualText=await $('#flash').getText();
	// const myarray=await actualText.replace(/(\n)/gm, " ").split("×")[0];
    // assert.include(myarray, 'You logged into a secure area! ', 'not logged into a secure area');
    
    //let validCredentials= 
    //let invalidCredentials = ;



    if (assert.include(await $('//*[@id="printsections"]/div[1]').getText(),"STUDENT'S CORNER","not valid creadentials"))
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
assert.include(await $("//form[@method='POST'][@action='varify.asp']//div[@class='descr']").getText(),"Incorrect Login or Session timed out!!!!!","assertion not true");
}
    browser.close();
});
