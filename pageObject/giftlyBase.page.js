const BASE_URL = Cypress.config('Giftly')

class GiftlyBasePage {
    searchInput(){
        return cy.get("[type='text']");
    }
    searchButton(){
        return cy.get('[type="button"]').contains("Search");  // There are no good selector, so i have to choose this option.
    }
    productCarts(){
        return cy.get('[data-e2e="product-card"] h3');
    }

    searchSecondPage(){
        return cy.get("[type='text']").first().type('DIAWA SALTIST');
    }

    assertionProducts(text){
        return this.productCarts().each(($els) => {
            expect($els.text()).contains(text);
        })
    } 

    assertionDifferences(text){
        return this.productCarts().then(($els) => {
            const firstPage = Array.from($els, el => el.innerText);
            this.searchInput(text);
            this.searchButton();
            this.productCarts().then(($els) => {
                const secondPage = Array.from($els, el => el.innerText);
                expect(firstPage).not.eq(secondPage);
            })
        })
    }

    verifyingURL(){
        return cy.url().should('not.eq', BASE_URL);
    }

    searchByText(text){
        this.searchInput().first().type(text);
        this.searchButton().dblclick();
    }

    clickOnFirstProductCart(){
      this.productCarts().first().click({force:true});
    }
}

export default GiftlyBasePage;