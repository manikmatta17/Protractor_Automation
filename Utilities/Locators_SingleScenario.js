var logger = require('./log');

describe("Protarctor Demo App", function () {

    it("should add one and two", function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        logger.log('info', 'Navigating to the Website');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id('gobutton')).click();
      
        browser.sleep(5000);
        expect(element(by.binding('latest')).getText()).toEqual('3');
        logger.log('info','Validate the Result')
        

    })



})




