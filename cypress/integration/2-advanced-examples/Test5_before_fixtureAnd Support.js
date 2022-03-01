describe('My first testsuite', function(){
    it('My first testcase', function(){
       // console.log("Hello world")
       cy.visit("https://rahulshettyacademy.com/angularpractice/")
       cy.get(':nth-child(2) > .nav-link').click()
       cy.get('h4.card-title').each(($el,index,$list)=>{
           const txt= $el.text()
            if(txt.includes('Blackberry')){
                cy.get('button').eq(index).click()

            }
       })
    })
})