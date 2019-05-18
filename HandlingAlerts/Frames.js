describe("handling iframes", function () {

    it("learning iframes", function () {

        browser.ignoreSynchronization = true;
        browser.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get");
        browser.switchTo().frame("iframeResult").then(function () {
            element(By.xpath("/html/body/button")).click();
            browser.switchTo().defaultContent();
            element(By.xpath("/html/body/div[5]/div/button")).click();

        })

    });


    it("total number of frames", function () {
        browser.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get");
        element.all(by.tagName("iframe")).each(function (frame) {
            frame.getAttribute("id").then(function (text) {
                console.log(text);
            })


        });


    });


    it("total count  of frames", function () {
        browser.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get");
        element.all(by.tagName("iframe")).count().then(function (size) {
            console.log("total frames are " + size)

        })
    })


});





