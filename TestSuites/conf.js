

exports.config = {


	directConnect: true,

	// Capabilities to be passed to the webdriver instance.
	multiCapabilities: [{
		browserName: 'chrome'
	}],


	framework: 'jasmine2',



	//	specs: ['./functional/logintest.spec.js'],
	//	specs: ['./smoke/*.spec.js'],


	suites: {

		smoke: ['./smoke/*.spec.js'],
		regression: ['./regression/*.spec.js'],
		functional: ['./functional/*.spec.js'],
		all: ['./*/*.spec.js'],
		selected: ['./functional/addcustomer.spec.js', './regression/openaccount.spec.js'],

	},



	// Options to be passed to Jasmine.
	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}



//commands protractor conf.js --suite=all
// add x in front of it if u want to skip a test





}