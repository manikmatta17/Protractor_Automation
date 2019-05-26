


describe("Add Customer Testcases", function () {
    var customerdata = require('../Pages/AddCustomerDetails');
    var logger = require('../util/log');
    it("Add a Cusomer", function () {
        logger.log('info', 'Navigating to the Add Customer');
        customerdata.gotoAddCustomer();
        customerdata.addCusomterInfo("manik", "matta", "3975");
    });

    var customerdata = require('../Pages/AddCustomerDetails');
    var logger = require('../util/log');
    it("Open an Account", function () {
        logger.log('info', 'Navigating to Open Account Page');
        customerdata.gotoOpenAccount();
        customerdata.openAccount("Harry Potter", "Rupee");

    });
    var customerdata = require('../Pages/AddCustomerDetails');
    var logger = require('../util/log');
    it("Search for customers", function () {
        logger.log('info', 'Searching the Customers');
        customerdata.gotoSearchCustomer();
        customerdata.validatecustomerrecords();
    });

})

