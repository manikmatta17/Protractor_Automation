describe("Handling ALerts Example",function(){

it("Example for ALert Handing",function(){


    browser.ignoreSynchronization=true;


    browser.get("https://mail.rediff.com/cgi-bin/login.cgi");

    element(By.xpath("//*[@type='submit']")).click();
    browser.sleep(5000);

    var alert =browser.switchTo().alert();
    alert.getText().then(function(text){


        console.log(text);
    })
    alert.accept();

    element(By.xpath("//*[@id='login1']")).sendKeys("manik");
    browser.sleep(4000);


})


})