
const { Given, When, Then } = require('@wdio/cucumber-framework');
const homePage = require ('../pageobjects/ixigoDemo.page.js');
const { assert } = require('chai');

Given(/^user opens ixigo flight booking site$/, async() => {
    await browser.maximizeWindow();
    await homePage.open();
    browser.pause(3000);
});

When(/^user enters the details of their preferred flight$/, async() => {
    //selecting departure city
	await homePage.clearDepField.click();
    await homePage.enterDeptCity();
    //selecting arrival city
    browser.pause(2000);
    await homePage.enterArrCity();
    await browser.pause(2000);
    //choosing the departure date
    await homePage.chooseDeptDate();
    await homePage.passengerDetails();
});

When(/^submits that information$/, async() => {
//clicks on search
//checking for submit button
let submitVisible=await homePage.submit.getText();
assert.include(submitVisible,'SEARCH');
await homePage.submitButton();

});

Then(/^user will get the flights with the given filters$/, async() => {
browser.pause(3000);
await expect(browser).toHaveUrlContaining("DEL&to=COK");
await expect(browser).toHaveUrlContaining("date=30092023");
browser.pause(5000);
let sortByText=await homePage.sortByBanner.getText();
assert.include(sortByText,'Sort by:');
let firstFlightDetails=await homePage.firstFlight.getText();
assert.include(firstFlightDetails,'I51534, I51981');
await browser.saveScreenshot('./screenshots/first.png');

});

