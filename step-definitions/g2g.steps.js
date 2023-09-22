const { Given, When, Then } = require('@wdio/cucumber-framework');
const g2gPage = require ('../pageobjects/g2g.page.js');

Given(/^the user is on geeforgeeks page$/, async() => {
    await browser.maximizeWindow();
    await browser.deleteCookies();
    await g2gPage.open()
});

When(/^the user searches for data structures$/, async() => {
	await g2gPage.search();
});

Then(/^the page on data structures in displayed$/, async() => {
	
});
