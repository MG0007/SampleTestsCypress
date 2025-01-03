import { locators } from "../support/locators";

/// <reference types="Cypress" />

describe('Framer home page loads and links work as expected', () => {
    beforeEach(() => {
        cy.visit(locators.homePage.pageUrl);
    });

    it('Home page should load correctly', () => {
        cy.title().should('eq', locators.homePage.tabTitle);
    });

    it('"Pricing page" should load correctly', () => {
        cy.get(locators.pricingPage.pageUrl).click();
        cy.get(locators.pricingPage.pageTitle).should('have.text', locators.pricingPage.pageTtl);
    });

    it('Pricing tiles display "$" for product prices', () => {
        cy.get(locators.pricingPage.pageUrl).click();

        cy.get(locators.pricingPage.pageTiles).each((tile) =>{
            expect(tile.text()[0]).to.eq('$');
        });
    });

    it('FAQ section in Pricing page contains 4 questions', ()=>{
        cy.get(locators.pricingPage.pageUrl).click();

        cy.get(locators.pricingPage.pageQuestions).should('have.length', locators.pricingPage.fqaNumberOfQuestions);
    });
});