//import { Given, When, Then } from '@cucumber/cucumber';
const { Given, When, Then } = require('@wdio/cucumber-framework');
//import { Key } from 'webdriverio'



Given(/^user opens ixigo flight booking site$/, async() => {
    await browser.maximizeWindow();
    browser.url('https://www.ixigo.com/');
    browser.pause(3000);
    
});

When(/^user enters the details of their preferred flight$/, async() => {
    //selecting departure city

     // to clear any default value that is written in the textfield
	await $("//div[@class='orgn u-ib u-v-align-bottom u-text-left']//div[@class='clear-input ixi-icon-cross']").click(); //clicks on the cross icon
    await $("//*[@class='orgn u-ib u-v-align-bottom u-text-left']//input[@placeholder='Enter city or airport']").setValue("Delhi");


   //handling automated suggestion here that you get after typing the name of the city

    await browser.keys([Key.Ctrl, 'VK_DOWN']);
    await browser.keys([Key.Ctrl,'VK_RETURN']);

    //await $("//div[@class='result-row flight-airport u-box-result'][@data-acindex='0']").click();
    //await $("//*[@id='content']/div/div[1]/div[5]/div/div/div[1]/div/div[3]/div/div[1]").click();
    //selecting arrival city

    await $("//*[@class='dstn u-ib u-v-align-bottom u-text-left']//input[@placeholder='Enter city or airport']").setValue("Kochi");
    await browser.pause(2000);
    await $("//*[@id='content']/div/div[1]/div[5]/div/div/div[3]/div/div[3]/div/div[1]").click();

    //choosing the departure date
    await $("//*[@class='c-input u-v-align-middle'][@placeholder='Depart'][@value='16 Sep, Sat']").click();
    await $("//*[@class='rd-day-body end-of-month']//div[@class='day has-info'][contains(text(),30)]").click();
    //await $("/html/body/div[2]/div[2]/div[1]/table/tbody/tr[5]/td[7]/div[1]").click(); //this

    //choosing the arrival date
    
    //await $("//input[@class='c-input u-v-align-middle'][@placeholder='Return']").click();
    //await $("//td[@class='rd-day-body'][@data-date='04102023']//div[contains(text(),'4')]").click();
    //await $("/html/body/div[4]/div[2]/div[1]/table/tbody/tr[1]/td[4]/div[1]").click();


    //choosing passenger details
    await $("//*[@class='c-input u-v-align-middle'][@id='passenger-list']").click();
    browser.pause(2000);
    await $("//*[@class='counter-item u-text-center u-ib'][@data-val='2']").click();//check
    await $("//*[@class='label u-pos-rel u-ib u-v-align-top'][text()='Economy']").click();

    

});

When(/^submits that information$/, async() => {
//clicks on search
await $("//*[@class='search u-ib u-v-align-bottom']").click();
});

Then(/^user will get the flights with the given filters$/, async() => {
browser.pause(3000);
await expect(browser).toHaveUrlContaining("DEL&to=COK");
await expect(browser).toHaveUrlContaining("date=30092023");
browser.pause(5000);
await browser.saveScreenshot('./screenshots/first.png');

});

