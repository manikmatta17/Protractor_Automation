describe("Handing Windows function", function () {

    it("handling muliple windows on hdfc bank", function () {
        browser.ignoreSynchronization = true;
        browser.get("https://hdfcbank.com");
        element(by.xpath("//*[@id='loginsubmit']")).click();

        let windowHandles = browser.getAllWindowHandles();
        let FirstWindow, SecondWindow, ThirdWindow;
        windowHandles.then(function (handles) {
            FirstWindow = handles[0];
            SecondWindow = handles[1];
            console.log("First Window is" + FirstWindow);
            console.log("Second Window is" + SecondWindow);

            browser.switchTo().window(SecondWindow).then(function () {
                element(by.xpath("/html/body/div[4]/div[3]/div/div/div[1]/div/a")).click();


                browser.sleep(5000);

                element(by.xpath("//*[@id='customertab1']/div[1]/div[1]/p[3]/a")).click();

                browser.sleep(5000);

            })


        })

    })
})


