/// <reference types="Cypress" />
describe('my Practice test',function(){
it('my third testcase', function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    cy.on('window:confirm',(string)=>{
return false
})
cy.get('#confirmbtn').click()
})
} )