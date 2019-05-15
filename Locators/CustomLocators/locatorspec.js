var locator = require('./customlocators.js');

describe("Learng custom locators", function () {

	it("using ngclick locator", function () {
		browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");

		element(by.model("Auth.user.name")).sendKeys("angular");
		element(by.model("Auth.user.password")).sendKeys("angular");
		element(by.model("model[options.key]")).sendKeys("Manik");
		element(by.ngClick('Auth.login()')).click();
		browser.sleep(2000);
	})


})
