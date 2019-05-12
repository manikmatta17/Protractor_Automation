describe("validating the calculator app", function () {


    var firstNumber = element(by.model('first'));
    var secondnumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    beforeEach(function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
    })

    afterEach(function () {


        browser.sleep(4000);
    })

    it("validating 1+1 =2", function () {

        firstNumber.sendKeys(1);
        secondnumber.sendKeys(1);
        goButton.click();
        latestResult.getText().then(function (text) {
            console.log("Result is" + text);
            expect(parseInt(text)).toBe(2);



        })


    })

    it("validating 1+3 =4", function () {

        firstNumber.sendKeys(1);
        secondnumber.sendKeys(3);
        goButton.click();
        latestResult.getText().then(function (text) {
            expect(latestResult.getText()).toEqual('4');
            console.log("Result is" + text);


        })


    })

    it("validating 1+1 =2", function () {

        firstNumber.sendKeys(1);
        secondnumber.sendKeys(1);
        goButton.click();
        latestResult.getText().then(function (text) {
            console.log("Result is" + text);
            expect(latestResult.getText()).not.toBe('3');




        })


    })


    describe("Validating the Exact Match title", function () {

        it("checking the title agaisnt Actual Title", function () {


            var title = browser.getTitle();
            expect(title).toEqual('Super Calculator');



        })


    })



    describe("Validating the Partial Match title", function () {

        it("checking the title agaisnt Actual Title", function () {


            var title = browser.getTitle();
            expect(title).toMatch('Super');



        })


    })



    describe("Validating the Not Equal to Match title", function () {

        it("checking the title agaisnt Actual Title", function () {


            var title = browser.getTitle();
            expect(title).not.toEqual('Super Calculator');



        })


    })


})



