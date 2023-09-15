const { Given, When, Then } = require('@wdio/cucumber-framework');



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
	
    await expect($('//*[@id="printsections"]/div[1]')).toHaveTextContaining("STUDENT'S CORNER")
    await $("//*[@href='Notice.asp']").click();
    browser.back();
    await $("//a[@href='Leave.asp']").click();
    await $("//*[@id='list1'][@class='ibox']").click();
    await $("//option[@value='2019S1CS-C']").click();
    await $("//a[@href='Logout.asp']").click();

    // await $("//input[@name='user'][@class='ibox']").setValue("u1903194");
    // await $("//input[@type='password'][@class='ibox']").setValue("190122");
    // await $("//input[@type='submit'][@value='LOGIN']").click();
    // await $("//a[@href='Notice.asp']").click();
});
