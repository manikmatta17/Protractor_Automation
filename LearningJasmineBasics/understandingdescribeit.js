describe("test entering into an Input box",function(){

it("Executing Input box test",function(){

    browser.get("https://angularjs.org/");

    element(by.model('yourName')).sendKeys("Manik");
    element(by.binding("yourName")).getText().then(function(text){


        console.log(text);
    })







})



})