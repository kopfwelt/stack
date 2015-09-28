// karma.conf.js
module.exports = function(config) {
  config.set({
    
    frameworks: ['jasmine'],

    // global config of your BrowserStack account
    browserStack: {
      username: 'Steve46',
      accessKey: 'itRue7ocHRugVXxTWThD'
    },

    // define browsers
    customLaunchers: {
      bs_firefox_mac: {
        base: 'BrowserStack',
        browser: 'firefox',
        browser_version: '21.0',
        os: 'OS X',
        os_version: 'Mountain Lion'
      },
      bs_iphone5: {

        base: 'BrowserStack',
        "os_version": "7.0",
        "os": "ios",
        "device": "iPhone 5C",
        "browser_version": null,
        "browser": "iphone"
      },
      bs_ch_mac: {
        base: 'BrowserStack',
        browser: 'chrome',
        browser_version: 'latest',
        os: 'OS X',
        os_version: 'Lion'
      }
    },

    // browsers: ['bs_iphone5']//, 'bs_iphone5'
    browsers: ['PhantomJS']
  });
};