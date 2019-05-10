exports.config = {
		
 framework: 'jasmine',
 directConnect: true, // means no need to start webDriver manager and pass Selenium address.
  
//Capabilities to be passed to the webDriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
      
//  seleniumAddress: 'http://localhost:4444/wd/hub', [only required when webdriver manager is started manuall]
  specs: ['Example2.js'],
  
  // it will wait for 30ms for test to happen
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
  
}