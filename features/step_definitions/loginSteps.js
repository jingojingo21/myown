const sharedObjects = require( '../config/sharedObjects.js');
const loginPage = require('..//pageobjects/loginpage.js');
const expect = require('chai').expect;
const {
    Given,
    When,
    Then } = require('cucumber');

    /*Scenario: loginPage*/

Given('I navigate to mendley  homepage', async function () {
    await this.browser.get("https://www.elsa.com/");
});


When(/^I click sign in link$/, async function () {
    var signin = new loginPage(this.browser);
    this.browser.sleep(1000);
    var signinElement = await signin.getSigninLinkElement();
    signinElement.click(); 
    this.browser.sleep(5000);
    var signin = new loginPage(this.browser);
    
    /*var headerObjects= new sharedObjects(this.browser);
    var pagetHeader = await headerObjects.getSigninPageHeader();
    var headerText = await pagetHeader.getText();
    expect(headerText).to.equal(sharedObjects.signinPageHeaderText);*/


    
});

When('I enter a valid email {string} and password {string}', async function (email,password) {
    var signin = new loginPage(this.browser);
    var emailInput = await signin.getEmailElement();
    await emailInput.sendKeys(email); 

    var continueButton = await signin.getContinueElement();
    await continueButton.click(); 
    await this.browser.sleep(1000);

    var passordInput= await signin.getPasswordElement();
    await passordInput.sendKeys(password);
    this.browser.sleep(1000);
});


 When(/^I click Log in button$/, async function(){
    var signin = new loginPage(this.browser)
    this.browser.sleep(1000);
    var loginButton = await signin.getSigninButtonElement();
    await loginButton.click();
    this.browser.sleep(1000);
  });
  Then('I should be able to login successfully', function () {
    // Write code here that turns the phrase above into concrete actions
    
  });    
