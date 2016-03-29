exports.config = {
    // The address of a running selenium server.
    'seleniumAddress': 'http://localhost:4444/wd/hub',
    // Capabilities to be passed to the webdriver instance.
    'capabilities': {
        'browserName': 'chrome'
    },

    chromeOnly: true,

    framework: 'jasmine',

    onPrepare: function() {
      browser.manage().window().setSize(1600, 1000);
    },

    // Options to be passed to Jasmine-node.
    'jasmineNodeOpts': {
        'showColors': true,
        'defaultTimeoutInterval': 30000
    }
};
