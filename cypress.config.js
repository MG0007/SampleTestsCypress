const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    viewportHeight: 1040,
    viewportWidth: 1920,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 5000,
    defaultCommandTimeout: 5000
  },
});
