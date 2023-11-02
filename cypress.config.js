const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1600,
  viewportHeight: 1200,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log('\t\u2713 - ' + message);
          return null;
        },
      });
      on('task', {
        logError(message) {
          console.log('\t\u2717 - ' + message);
          return null;
        },
      });
    },
    experimentalStudio: true
  },
  blockHosts: '*.google-analytics.com',
  video: true,
  trashAssetsBeforeRuns: true,
});
