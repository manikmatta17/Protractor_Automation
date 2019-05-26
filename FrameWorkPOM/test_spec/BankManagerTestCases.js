var logger = require('../util/log');
var base = require('../Pages/BasePage.js');
var OR = require('../json/OR.json');
describe("BankManager Login Test", function () {

    var home_page = require('../pages/HomePage_Created.js');

    it("Login as Bank Manager", function () {
        logger.log('info', 'Navigating to the Website');
        base.navigatetoUrl("http://www.way2automation.com/angularjs-protractor/banking/#/login")
        var title = base.getPageTitle();
        expect(title).toBe("Protractor practice website - Banking App");
        browser.sleep(3000);
        var customer = home_page.loginAsBankManager();
        customer.gotoAddCustomer().addCusomterInfo(OR.locators.addcustomerdetailspage.fName, OR.locators.addcustomerdetailspage.lName, OR.locators.addcustomerdetailspage.pCode);
    });

});
