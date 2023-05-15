const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://automation-sandbox-python-mpywqjbdza-uc.a.run.app/'
  },
});
