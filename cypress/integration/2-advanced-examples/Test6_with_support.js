describe('My first testsuite', function(){
    it('My first testcase', function(){
       // console.log("Hello world")
       cy.visit("https://rahulshettyacademy.com/angularpractice/")
       cy.get(':nth-child(2) > .nav-link').click()
       cy.selectproduct('Blackberry')
       cy.selectproduct('Nokia Edge')
    })
})