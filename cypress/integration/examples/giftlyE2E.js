import GiftlyPOM from "../../../PageObject/giftlyPOM";
const giftlyPOM = new GiftlyPOM
describe('Klickly task', () => {
    it('Verifying search of products”', () => {
        giftlyPOM.searchPage(); // search input
        giftlyPOM.clickSearchButton();
        giftlyPOM.clickOnProduct();
        giftlyPOM.verifyingURL();
    })
    it('Verify containing product DIAWA SALTIST', () => {
        giftlyPOM.searchSecondPage(); // search input
        giftlyPOM.clickSearchButton();
        giftlyPOM.assertionProducts();
    })
    it('Verify different between pages', () => {
        giftlyPOM.searchPage(); // search input
        giftlyPOM.clickSearchButton();
        giftlyPOM.assertionDifferents();
    })
})