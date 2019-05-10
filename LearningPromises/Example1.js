describe("Testing Angular Application",function(){

it("undestanding promises",function(){

    browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
  //  element(by.buttonText("Customer Login")).click();
    element(by.css(".btn.btn-primary.btn-lg")).click();
    browser.sleep(2000);

    browser.getTitle().then(function(title){

     console.log(title);
     if(title==="Protractor practice website - Banking App"){

        console.log("passsed")
     }
     else{
         console.log("failed")
     }


    })






})




})