var SelectWrapper = require('../select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var mySelect1 = new SelectWrapper(by.id("currency"));
var logger = require('../log');
var locator = require('../customlocators.js');

describe("Automating Bank Manager Login Functionality", function () {

    it("Login to the Account", function () {
        logger.log('info', 'Navigating to the Website');
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        browser.sleep(3000);
        logger.log('info', 'Clicking on Customer Login');
        element(by.ngClick('manager()')).click();
        browser.sleep(3000);
    })

    it("Validate Add Customer", function () {

        element(by.ngClick("addCust()")).click();
        browser.sleep(3000);
        element(by.model("fName")).sendKeys("MAnik");
        browser.sleep(3000);
        element(by.model("lName")).sendKeys("Matta");
        browser.sleep(3000);
        element(by.model("postCd")).sendKeys("3975");
        browser.sleep(3000);
        element(by.css(".btn.btn-default")).click();
        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function (text) {

            console.log("Text of alert is" + text);
            alertDialog.accept();


        })

    })



    it("Validate Open Account", function () {

        element(by.ngClick("openAccount()")).click();
        browser.sleep(3000);
        mySelect.selectByText("Harry Potter");

        mySelect1.selectByText("Rupee");
        browser.sleep(3000);

        element(by.buttonText("Process")).click
        browser.sleep(8000);



    })




    it("Validate Search Customer", function () {

        element(by.ngClick("showCust()")).click();
        browser.sleep(3000);

        element(by.model("searchCustomer")).sendKeys("Harry");
        browser.sleep(3000);

           var firstName= element(by.repeater("cust in Customers").row(0).column("cust.fName"));
           firstName.getText().then(function(text){

            console.log("The value is"+text);
            expect (firstName.getText()).toEqual("Harry");
            browser.sleep(3000);
    })

})

})













