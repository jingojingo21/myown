@Login
Feature: Login Feature

  As a user, I want to login to website
  so that I can make an appointment.

  @Valid

  Scenario Outline: Login with a valid credential
    Given  I navigate to mendley  homepage
    When  I click sign in link
    And   I enter a valid email <email> and password <password>
    And  I click Log in button 
	  Then  I should be able to login successfully

Examples: 
      | email| password           |
      | 'paker@yahoo.co.uk' | 'Test@001' |
  
