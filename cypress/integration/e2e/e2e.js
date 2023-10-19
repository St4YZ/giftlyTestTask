import GiftlyBasePage from '../../../pageObject/giftlyBase.page';
const giftlyBasePage = new GiftlyBasePage();

let task2TextForSearch = 'DIAWA SALTIST';
let testPhrase = 'Baby sky blue';
describe('Klickly task', () => {
    it('Verifying search of products”', () => {
        giftlyBasePage.searchByText(testPhrase);
        giftlyBasePage.clickOnFirstProductCart();
        giftlyBasePage.verifyingURL();
    });

    it(`Verify containing product ${task2TextForSearch}`, () => {
        giftlyBasePage.searchByText(task2TextForSearch);
        giftlyBasePage.assertionProducts(task2TextForSearch);
    });

    it('Verify different between pages', () => {
        giftlyBasePage.searchByText(testPhrase);
        giftlyBasePage.assertionDifferences();
    });
})