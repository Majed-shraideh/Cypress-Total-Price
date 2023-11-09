/// <reference types="Cypress" />

describe('test For magento', () => {
    it('First test', () => {
        // Visiting the specified URL
        cy.visit("https://magento.softwaretestingboard.com/")


       cy.get('#ui-id-5').click()
       cy.get('.widget').find('.item').contains('Hoodies').click()
       cy.get(':nth-child(5) > .field > .control > #limiter').select('36')


       cy.get('.price-box').as('items')
       cy.get('@items').find('.price').invoke('text').as('ItemPrice')
       cy.get('@ItemPrice').then((PriceText)=>{
            let ListOfPrice = PriceText.split("$")
            let total = 0;
            for (let i = 0; i < ListOfPrice.length; i++) {
                 total = total + Number(ListOfPrice[i]) 
            }
            cy.log(total)
       })
            
       })
 
      


    });

