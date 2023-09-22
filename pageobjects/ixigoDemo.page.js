class homePage{
//locators
get clearDepField () {return $("//div[@class='orgn u-ib u-v-align-bottom u-text-left']//div[@class='clear-input ixi-icon-cross']");}
get deptField () {return $("//*[@class='orgn u-ib u-v-align-bottom u-text-left']//input[@placeholder='Enter city or airport']");}
get deptAutoSuggestion(){return $("//div[@class='orgn u-ib u-v-align-bottom u-text-left']//div[@class='result-row flight-airport u-box-result selected'][@data-acindex='0']")};
get arrField () { return $("//*[@class='dstn u-ib u-v-align-bottom u-text-left']//input[@placeholder='Enter city or airport']")};
get arrAutoSuggestion() {return $("//div[@class='dstn u-ib u-v-align-bottom u-text-left']//div[@class='result-row flight-airport u-box-result selected'][@data-acindex='0']")};
get deptDateClick(){return $("//*[@class='c-input u-v-align-middle'][@placeholder='Depart'][@value='23 Sep, Sat']")};
get deptDateSelect(){return $("//*[@class='rd-day-body end-of-month']//div[@class='day has-info'][contains(text(),30)]")};
get passengerDetailsClick(){return $("//*[@class='c-input u-v-align-middle'][@id='passenger-list']")};
get numberOfPassengers(){return $("//*[@class='counter-item u-text-center u-ib'][@data-val='2']")};
get travelStyle() {return $("//*[@class='label u-pos-rel u-ib u-v-align-top'][text()='Economy']")};
get submit() {return $("//*[@class='search u-ib u-v-align-bottom']")};

async open()
{
    return browser.url("https://www.ixigo.com/");

}

async enterDeptCity()
{
    await this.deptField.setValue("Delhi");
    await this.deptAutoSuggestion.click();
}

async enterArrCity()
{
    await this.arrField.setValue("Kochi");
    await this.arrAutoSuggestion.click();
}

async chooseDeptDate()
{
    await this.deptDateClick.click();
    await this.deptDateSelect.click();
}

async passengerDetails()
{
await this.passengerDetailsClick.click();
await this.numberOfPassengers.click();
await this.travelStyle.click();
}

async submitButton()
{
await this.submit.click();
}
}
module.exports = new homePage();