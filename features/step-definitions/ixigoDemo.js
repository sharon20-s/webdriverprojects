//import { Given, When, Then } from '@cucumber/cucumber';
const { Given, When, Then } = require('@wdio/cucumber-framework');



Given(/^user opens ixigo flight booking site$/, async() => {
    await browser.maximizeWindow();
    //await browser.deleteCookies();
    browser.url('https://www.ixigo.com/');
    browser.pause(3000);
    
});

When(/^user enters the details of their preferred flight$/, async() => {
    //selecting departure and arrival cities
	// await $("//*[@class='orgn u-ib u-v-align-bottom u-text-left']").setValue("Delhi");
    // await $("//*[@class='dstn u-ib u-v-align-bottom u-text-left']").setValue("Kochi");

    //choosing the departure date
    await $("//*[@class='c-input u-v-align-middle'][@placeholder='Depart'][@value='16 Sep, Fri']").click();
    //await $("//*[@class='rd-day-body end-of-month low'][@data-date='30092023']").click();
    await $("/html/body/div[2]/div[2]/div[1]/table/tbody/tr[5]/td[7]/div[1]").click();
    //choosing the arrival date
    //await $("//*[@class='rd-day-body'][@data-date='12102023']").click();
    //await $("/html/body/div[2]/div[2]/div[2]/table/tbody/tr[2]/td[5]/div[1]").click();

    //choosing passenger details
    await $("//*[@class='c-input u-v-align-middle'][@id='passenger-list']").click();
    await $("//*[@class='counter-item u-text-center u-ib'][@data-val='2']").click();//check
    await $("//*[@class='label u-pos-rel u-ib u-v-align-top'][text()='Economy']").click();

    //clicks on search
    await $("//*[@class='search u-ib u-v-align-bottom']").click();

});

When(/^submits that information$/, async() => {

});

Then(/^user will get the flights with the given filters$/, async() => {

});

