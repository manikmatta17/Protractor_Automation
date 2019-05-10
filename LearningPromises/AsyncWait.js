describe("Testing Angular Application", function () {

    it("undestanding promises", async function () {
        browser.ignoreSynchronization = true;
        browser.get('http://www.tizag.com/htmlT/htmlcheckboxes.php');
        for (var i = 1; i <= 4; i++) {
            element(by.xpath('//div[4]/input[' + i + ']')).click();
            var text = await element(by.xpath('//div[4]/input[' + i + ']')).getAttribute('value').then(function (text) {
                console.log(text)


            })

        }
        browser.sleep(4000);


    })
})

