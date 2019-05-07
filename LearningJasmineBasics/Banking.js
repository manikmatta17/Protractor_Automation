
describe('Test Automation of a Banking App', function() {
		
	it('Validate customer login testcase',function(){
		
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		element(by.buttonText("Customer Login")).click();
        expect(browser.getTitle()).toContain("Protractor practice website - Banking App");
		browser.sleep(1000);
		
		element.all(by.css("#userSelect option")).then(function(items){
		
			console.log("--------------printvalue from dropdown List--------")
			console.log("total value in dropdown are "+ items.length);
			
			
			for(i=0; i<items.length; i++){
						
			
				items[i].getText().then(function(text){
									
					console.log(text);
				});
			}
			
			console.log("--------------printvalue attributre from dropdown List--------")

			
						
			for(i=0; i<items.length; i++){
								
				items[i].getAttribute("value").then(function(text){
									
					console.log(text);
				});
			}
			
			//element(by.model("custId")).element(by.css("[value='2']")).click();

			element(by.model("custId")).$("[value='2']").click();
			element(by.model("custId")).$("[value='2']").click();
			element(by.buttonText("Login")).click();
			element(by.binding("user")).getText().then(function(text){
				console.log(text);
			})
			expect(element(by.binding("user")).getText()).toEqual("Harry Potter");
			
			browser.sleep (3000);
		});
		
		
		
		
	})
	
	
	
	
})


