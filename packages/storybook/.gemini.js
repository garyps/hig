const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

const chromeCapabilities = {
  browserName: "chrome",
  version: "68.0",
  platform: "macOs 10.12",
  name: "Gemini visual regression tests"
};

module.exports = {
  rootUrl: "http://www.example.com",
  gridUrl: "http://127.0.0.1:4444/wd/hub",
  screenshotsDir: "./gemini/screens",
  compositeImage: true,
  sessionsPerBrowser: 3,
  httpTimeout: 9000,
  retry: 3,
  system: {
    plugins: {
      "html-reporter/gemini": {
        path: "./gemini-report/"
      }
    }
  },
  browsers: {
    chromeReact: {
      rootUrl: "http://localhost:9876",
      screenshotsDir: "./gemini/chromeReact",
      desiredCapabilities: chromeCapabilities
    }
  },
  sets: {
    react: {
      files: ["../**/*.gemini.js"],
      browsers: ["chromeReact"]
    }
  }
};
