import GiftlyPOM from "../../../PageObject/giftlyPOM";
const giftlyPOM = new GiftlyPOM
describe('Klickly task', () => {
    xit('Verifying search of products”', () => {
        giftlyPOM.searchPage(); // search input
        giftlyPOM.clickSearchButton();
        giftlyPOM.clickOnProduct();
        giftlyPOM.verifyingURL();
    })
    xit('Verify containing product DIAWA SALTIST', () => {
        giftlyPOM.searchSecondPage(); // search input
        giftlyPOM.clickSearchButton();
        giftlyPOM.assertionProducts();
    })
    xit('Verify different between pages', () => {
        giftlyPOM.searchPage(); // search input
        giftlyPOM.clickSearchButton();
        giftlyPOM.assertionDifferents();
    })
})