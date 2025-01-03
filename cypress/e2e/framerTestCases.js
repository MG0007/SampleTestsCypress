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

        cy.get(locators.pricingPage.pageTiles).each((tile) => {
            expect(tile.text()[0]).to.eq('$');
        });
    });

    it('FAQ section in Pricing page contains 4 questions', () => {
        cy.get(locators.pricingPage.pageUrl).click();

        cy.get(locators.pricingPage.pageQuestions).should('have.length', locators.pricingPage.fqaNumberOfQuestions);
    });

    it.only('Does display "visit" button on each card in Components section of Components page', () => {
        cy.get(locators.componentsPage.pageUrl).click();

        let visitButtonTotal = 0;
        let largeCardTotal = 0;
        let smallCardTotal = 0;

        cy.get(locators.componentsPage.cardsVisitButtons).then((elements) => {
            let splitText = elements.text().split('V');
            visitButtonTotal = splitText.length - 1;
        });

        cy.get(locators.componentsPage.largeCard).then((elements) => {
            let splitText = elements.text().split('V');
            largeCardTotal = splitText.length - 1;
        });

        cy.get(locators.componentsPage.smallCard).then((elements) => {
            let splitText = elements.text().split('V');
            smallCardTotal = splitText.length - 1;
            expect(largeCardTotal + smallCardTotal).to.equal(visitButtonTotal);
        });
    });
});