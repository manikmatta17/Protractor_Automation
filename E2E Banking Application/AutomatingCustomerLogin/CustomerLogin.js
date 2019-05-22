var SelectWrapper = require('../select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var logger = require('../log');

describe("Automating Customer Login Functionality", function () {

    it("Login to the Account", function () {
        logger.log('info', 'Navigating to the Website');
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        browser.sleep(3000);
        logger.log('info', 'Clicking on Customer Login');
        element(by.buttonText("Customer Login")).click();
        mySelect.selectByText("Harry Potter");
        element(by.buttonText("Login")).click();

    })



    it("Validate deposit", function () {
        logger.log('info', 'Validating the Deposit');
        element(by.buttonText("Deposit")).click();
        browser.sleep(3000);
        element(by.model("amount")).sendKeys("1000");
        element(by.css(".btn.btn-default")).click();
        browser.sleep(3000);
        element(by.binding("message")).getText().then(function (text) {

            console.log("Text received is" + text);

            expect(element(by.binding("message")).getText()).toEqual("Deposit Successful");
        })
    })

    it("WithDrawl Amount", function () {
        logger.log('info', 'withdrawl some Amount');
        element(by.buttonText("Withdrawl")).click();
        browser.sleep(3000);
        element(by.model("amount")).sendKeys("1000");
        element(by.css(".btn.btn-default")).click();
        browser.sleep(3000);
        element(by.binding("message")).getText().then(function (text) {

            console.log("Text received is" + text);

            expect(element(by.binding("message")).getText()).toEqual("Transaction successful");
        })

    })


})