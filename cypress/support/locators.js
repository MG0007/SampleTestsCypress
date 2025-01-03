const locators = {
    homePage: {
        pageUrl: 'https://mind-wend-913065.framer.app/',
        getTheAppButton: 'div.framer-14g223s span',
        mobileAppVideoButtons: 'div.framer-15y7aei > div',
        _3DButton: 'div.framer-yvxyy1 span',
        animation3D: 'div.framer-xattrb[data-framer-name="Variant 2"]',
        tabTitle: '3D Framer Site'
    },
    pricingPage: {
        pageUrl: 'div.framer-1g3amks-container div[data-framer-generated="true"] span',
        pageTitle: 'div.framer-1xy1tag h1 span',
        pageTiles: 'div.pricing-container h2 span',
        pageQuestions: 'div.framer-cx0lih [values="[object Object]"]',
        fqaNumberOfQuestions: 4,
        pageTtl: 'Pricing'
    },
    componentsPage: {
        pageUrl: 'div.framer-15kr31b-container span',
        cardsVisitButtons: 'div.framer-1ytqfhu div[values="[object Object]"] div[name="Button"]',
        largeCard: 'div.framer-1ytqfhu div[values="[object Object]"] div[name="Card"]',
        smallCard: 'div.framer-1ytqfhu div[values="[object Object]"] div[name="Card Small"]',
        signUpButtonColor: 'rgb(255,82,79)',

    },
    footerSection: {
        section: 'div.framer-1jtqeum',
        subscribeSection: 'div.framer-l3ry8h',
        signUpButton: 'form input[value="Sign Up"]',
    },

    updatesPage: {
        pageUrl: 'div.framer-7hrpx3-container span',
        pageTitle: 'div.framer-1oe4f0f h1 span',
    },
}

export { locators }