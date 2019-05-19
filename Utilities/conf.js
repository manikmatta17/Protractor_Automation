exports.config = {

	//directConnect: true,

	// Capabilities to be passed to the webdriver instance.
	multiCapabilities: [{
		browserName: 'chrome'
	},
	],

	framework: 'jasmine2',

	//	seleniumAddress: 'http://localhost:4444/wd/hub',

	specs: ['Locators_SingleScenario.js'],

	// Options to be passed to Jasmine.
	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	},

	onPrepare: function () {


		browser.ignoreSynchronization = true;

		// Override the timeout for webdriver.
		browser.driver.manage().timeouts().implicitlyWait(60000);
		var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(new AllureReporter({
			allureReport: {
				resultsDir: 'allure-results'
			}
		}));
		jasmine.getEnv().afterEach(function (done) {
			browser.takeScreenshot().then(function (png) {
				allure.createAttachment('Screenshot', function () {
					return new Buffer(png, 'base64')
				}, 'image/png')();
				done();
			})
		});

	},
	onComplete:function () {
        console.log("Sending Mail with reports for the test execution.");
        var sys = require('util')
        var exec = require('child_process').exec;
        function puts(error, stdout, stderr) { sys.puts(stdout) }
        exec("node mail.js", puts);
    },

}