const GiftlyURL = Cypress.config('Giftly')
class GiftlyPOM {
    searchPage(){
        return cy.get("[type='text']").first().type('Baby sky blue')  // search input
    }
    clickSearchButton(){
        return cy.get('[type="button"]').contains("Search").dblclick()
    }
    clickOnProduct(){
        return cy.get('[data-e2e="product-card"] h3').first().click({force:true})
    }
    verifyingURL(){
        return cy.url().should('not.eq', `${GiftlyURL}`)
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////
    searchSecondPage(){
        return cy.get("[type='text']").first().type('DIAWA SALTIST')
    }
    assertionProducts(){
        return cy.get('[data-e2e="product-card"] h3').each(($els) => {
            expect($els.text()).contains('DIAWA SALTIST')
        })
    }
    assertionDifferents(){
        return cy.get('[data-e2e="product-card"] h3').then(($els) => {
            const firstPage = Array.from($els, el => el.innerText);
            cy.get("[type='text']").first().type('DIAWA SALTIST') // search input
            cy.get('[type="button"]').contains("Search").dblclick()
            cy.get('[data-e2e="product-card"] h3').then(($els) => {
                const secondPage = Array.from($els, el => el.innerText);
                expect(firstPage).not.eq(secondPage)
            })
            
        })
    }

}

export default GiftlyPOM;