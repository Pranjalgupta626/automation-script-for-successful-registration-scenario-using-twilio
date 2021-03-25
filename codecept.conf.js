exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/pranjalgupta/Desktop/app-stage-release-test.apk',
      platform: 'Android',
      device: 'emulator'
    },
    REST: {
      endpoint: "http://localhost:1442"
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'automation-script-for-successful-registration-scenario-using-twilio',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}