describe("This is the Protractor Demo",function(){
it("It should have title",function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(4000);  
    expect(browser.getTitle()).toEqual('Super Calculator');   
     
});

});