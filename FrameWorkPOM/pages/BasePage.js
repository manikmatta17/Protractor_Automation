var BasePage = function () {

    this.navigatetoUrl= function(url){

        browser.get(url);
    };

    this.getPageTitle = function(){

       return browser.getTitle();
    }


}
module.exports = new BasePage();