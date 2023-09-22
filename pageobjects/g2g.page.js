class g2gPage  {
    
   
    async open () {
        return browser.url(`https://www.geeksforgeeks.org/`)
    }
     async search()
     {
        await $("//span[@class='ant-input-affix-wrapper ant-input-affix-wrapper-lg']//input[@class='ant-input ant-input-lg'][@type='text']").setValue("What is a Data Structure");
     }
 
    }
    
    module.exports = new g2gPage();