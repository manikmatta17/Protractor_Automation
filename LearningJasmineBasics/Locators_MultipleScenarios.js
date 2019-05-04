describe("Protarctor Demo App", function () {

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    beforeEach(function () {

        browser.get('http://juliemr.github.io/protractor-demo/');


    })

    afterEach(function () {

        browser.sleep(4000);


    })

    it("Should add 1 AND 2", function () {

        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();
        expect(latestResult.getText()).toEqual('3');

    })


    it("Should add 4 AND 7", function () {

        firstNumber.sendKeys(4);
        secondNumber.sendKeys(7);

        goButton.click();
        expect(latestResult.getText()).toEqual('3');

    })


    it("should read the value from an input", function () {

        firstNumber.sendKeys(4);
        expect(firstNumber.getAttribute('value')).toEqual('4')


    })

    it('should have a title', function () {

        expect(browser.getTitle()).toEqual('Super Calculator');
    });

})


