/// <reference types="Cypress" />
describe('my Practice test',function(){
it('my second testcase', function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('be')
    cy.wait(6000)
    cy.get('.products').find('.product').each(($el, index, $list) => {
 
        const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Beans'))
{
  cy.wrap($el).find('button').click()
}
})   
 cy.get('a.cart-icon').click()
 cy.contains('PROCEED TO CHECKOUT').click()
//cy.get('body')
cy.wait(8000)
cy.get('button').contains('Place Order').click()
})
} )