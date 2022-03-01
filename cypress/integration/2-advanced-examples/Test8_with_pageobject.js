import Shoppage from '../Pageobjects/Shoppage'
describe('My first testsuite', function(){
    it('My first testcase', function(){
       // console.log("Hello world")
       const shoppage =new Shoppage()
       cy.visit("https://rahulshettyacademy.com/angularpractice/")
       shoppage.getshoptab().click()
       cy.selectproduct('Blackberry')
       cy.selectproduct('Nokia Edge')
    })
})