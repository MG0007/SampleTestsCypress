import { locators } from "../support/locators";

/// <reference types="Cypress" />

describe('Framer home page loads and links work as expected', () => {
    beforeEach(() => {
        cy.visit(locators.homePage.homePageUrl);
    });


    it('Home page should load correctly', () => {
        cy.title().should('eq', '3D Framer Site');
    });

    it('"Pricing page" should load correctly', () => {
        cy.get(locators.pricingPage.pricingPageUrl).click();
        cy.get(locators.pricingPage.pricingPageTitle).should('have.text', 'Pricing');
=======
    
    });

    it.only('Pricing tiles display "$" for product prices', () => {
        cy.get(locators.pricingPage.pricingPageUrl).click();

        cy.get(locators.pricingPage.pricingPageTiles).each((tile) =>{
            expect(tile.text()[0]).to.eq('$');
        });
    })
});