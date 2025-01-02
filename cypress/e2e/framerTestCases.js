import { locators } from "../support/locators";

/// <reference types="Cypress" />

describe('Visit Framer home page and click "Pricing"', () => {
    beforeEach(() => {
        cy.visit(locators.homePage.homePageUrl);
    });

    
})