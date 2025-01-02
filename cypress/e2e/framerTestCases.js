import { locators } from "../support/locators";

/// <reference types="Cypress" />

describe('Framer home page loads and links work as expected', () => {
    beforeEach(() => {
        cy.visit(locators.homePage.homePageUrl);
    });

    it('Home page should load correctly', ()=>{
        cy.log(cy.title());
        cy.title().should('eq','3D Framer Site');
    });
});