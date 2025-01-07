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

    it('Does display "visit" button on each card in Components section of Components page', () => {
        cy.get(locators.componentsPage.pageUrl).click();

        const largeCardSelectors = [];
        const smallCardSelectors = [];

        cy.get(locators.componentsPage.largeCard).then((elements) => {

            elements.each((i, el) => {
                cy.get(el).invoke('attr', 'class').then((attr) => {
                    largeCardSelectors.push(attr);
                });
            });
        });

        cy.wrap(largeCardSelectors).each((card) => {
            cy.get('div.' + card.trim() + locators.componentsPage.cardAddition).invoke('text').then((text) => {
                expect(text).to.equal(locators.componentsPage.buttonText);
            });
        });

        cy.get(locators.componentsPage.smallCard).then((elements) => {
            elements.each((i, el) => {
                cy.get(el).invoke('attr', 'class').then((attr) => {
                    smallCardSelectors.push(attr);
                });
            });
        });

        cy.wrap(smallCardSelectors).each((card) => {
            cy.get('div.' + card.trim() + locators.componentsPage.cardAddition).invoke('text').then((text) => {
                expect(text).to.equal(locators.componentsPage.buttonText);
            });
        });
    });

    it('Does blur the background after "Get the app" click', () => {
        cy.get(locators.homePage.getTheAppButton).click();
        cy.get('#overlay div.framer-vrqh0x').should('have.length', 1);
    });

    it('Does display the "Updates" page after clicking the "Update" button', () => {
        cy.get(locators.updatesPage.pageUrl).click();
        cy.get(locators.updatesPage.pageTitle).then((el) => {
            expect(el.text()).to.equal('Updates');
        });
    })

    it('Does display "get the app" and "watch video" one above the other on mobile', () => {
        cy.viewport(400, 800);

        cy.get(locators.homePage.mobileAppVideoButtons).then((elements) => {

            elements.each((i, el) => {
                if(i < locators.homePage.mobileAppVideoButtonsArr.length){
                    cy.get(el).invoke('text').then((text) => {
                        expect(text).to.equal(locators.homePage.mobileAppVideoButtonsArr[i]);
                    });
                };                
            });
        });
    });

    it('Does display 3d animation after clicking on "click to view in 3d" button', () => {
        cy.get(locators.homePage._3DButton).click();
        cy.get(locators.homePage.animation3D).should('have.length', 1);

    });
});

