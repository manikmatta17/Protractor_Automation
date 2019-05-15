describe("handling iframes",function(){

    it("learning iframes",function(){

        browser.ignoreSynchronization=true;
        browser.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get");
        browser.switchTo().frame("iframeResult").then(function(){

            element(By.xpath("/html/body/button")).click();

        })
        
    })


})