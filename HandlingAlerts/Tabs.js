describe("Handing Windows function", function () {

    it("handling muliple windows on hdfc bank", function () {
        browser.ignoreSynchronization = true;
        browser.get("https://hdfcbank.com");
        element(by.xpath("//*[@id='loginsubmit']")).click();
        browser.sleep(5000);
        browser.getAllWindowHandles().then(function (handles) {

            browser.switchTo().window(handles[1]).then(function () {

                browser.getTitle().then(function (text) {

                    console.log("Second window Title is" + text);


                })


            })

            browser.switchTo().window(handles[0]).then(function () {

                browser.getTitle().then(function (text) {
                    console.log("First Window title is" + text);

                })



            })




        });


    })
})

