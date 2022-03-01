/// <reference types="Cypress" />
describe('My first testsuite', function(){
    
    before(function(){
      cy.fixture('example').then(function(data){
          this.data=data
      })
    })
    it('My first testcase', function(){
       // console.log("Hello world")
       cy.visit("https://rahulshettyacademy.com/angularpractice/")
       cy.get(':nth-child(2) > .nav-link').click()
       
this.data.productName.forEach(function(element){
     cy.selectproduct(element)
      })
    }) 
})