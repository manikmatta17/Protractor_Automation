var SelectWrapper = require('../util/select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var mySelect1 = new SelectWrapper(by.id("currency"));
var locator = require('../util/customlocators.js');
var AddCustomerDetails = function () {

    this.gotoAddCustomer = function () {
        element(by.ngClick("addCust()")).click();
        browser.sleep(3000);
        return this;

    }
    this.addCusomterInfo = function (fname, lname, postname) {
        element(by.model("fName")).sendKeys(fname);
        browser.sleep(3000);
        element(by.model("lName")).sendKeys(lname);
        browser.sleep(3000);
        element(by.model("postCd")).sendKeys(postname);
        browser.sleep(3000);
        element(by.css(".btn.btn-default")).click();
        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function (text) {

            console.log("Text of alert is" + text);
            alertDialog.accept();

        })
        this.this;

    }


    this.gotoOpenAccount = function () {
        element(by.ngClick("openAccount()")).click();
        browser.sleep(3000);
        return this;
    }

    this.openAccount = function (Customer, currency) {
        mySelect.selectByText(Customer);

        mySelect1.selectByText(currency);
        browser.sleep(3000);

        element(by.buttonText("Process")).click
        browser.sleep(8000);
        return this;
    }

    this.gotoSearchCustomer = function () {
        element(by.ngClick("showCust()")).click();
        browser.sleep(3000);
        return this;

    }

    this.validatecustomerrecords = function () {
        element(by.model("searchCustomer")).sendKeys("Harry");
        browser.sleep(3000);

        var firstName = element(by.repeater("cust in Customers").row(0).column("cust.fName"));
        firstName.getText().then(function (text) {

            console.log("The value is" + text);
            expect(firstName.getText()).toEqual("Harry");
            browser.sleep(3000);
        })
        return this;

    }


}
module.exports = new AddCustomerDetails();
