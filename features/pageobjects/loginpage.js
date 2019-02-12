const webdriver= require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const waitTime = 2000;

function loginPage(browser){
this.browser = browser;
     
    this.getSigninLinkElement = function(){
        var xpath  = "//a[@href='/sign/in/']";
        return this.browser.wait(until.elementLocated(By.xpath(xpath),waitTime,'could not find sigin element' ));
    }
    this.getEmailElement = function(){
        var xpath  = "//input[@id='email']";
        return this.browser.wait(until.elementLocated(By.xpath(xpath),waitTime,'could not find login element' ));
    }
        
    this.getContinueElement = function(){
        var xpath = "//button[@id = 'els-continue']";
        return this.browser.wait(until.elementLocated(By.xpath(xpath),waitTime,'could not find continue button  element' ));
    }

    this.getPasswordElement = function(){
        var xpath = "//input[@id='password']";
        return this.browser.wait(until.elementLocated(By.xpath(xpath),waitTime,'could not find password element' ));
     }
     this.getSigninButtonElement = function(){
     var xpath = "//button[@type ='submit']"
        return this.browser.wait(until.elementLocated(By.xpath(xpath),waitTime,'could not find  login button element' ));
     }

     this.getSigninPageHeader = function(){
        var xpath = "//div[@class= 'els-flow-msg']"//h2
           return this.browser.wait(until.elementLocated(By.xpath(xpath),waitTime,'could not find  login button element' ));
        }

     
}
module.exports = loginPage;