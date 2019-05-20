
var objects = require('./Objects.json');

describe("test Gmail", function () {

    beforeEach(function () {

        browser.ignoreSynchronization = true;
        browser.get(objects.testsiteurl);
        console.log("Test site url is" + objects.testsiteurl);
    })

    it("Validate user credetials", function () {

        browser.sleep(4000);
        console.log("username is" + objects.locators.loginpage.username);
        browser.sleep(4000);
        element(by.xpath(objects.locators.loginpage.username)).sendKeys("test");

    })

})