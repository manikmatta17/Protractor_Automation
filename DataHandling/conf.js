exports.config = {

	directConnect: true,


	multiCapabilities: [{
		browserName: 'chrome'
	},
	],

	framework: 'jasmine2',



	specs: ['Parametrisation.js'],


	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	},

	onPrepare: function () {


		browser.ignoreSynchronization = true;


		browser.driver.manage().timeouts().implicitlyWait(60000);


	}
}