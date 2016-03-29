module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/assets/js/lib/*.js',
      'app/assets/js/vendor/*.js',
      'app/assets/js/angular/angular.js',
      'app/assets/js/angular/angular-cookies.js',
      'app/assets/js/angular/angular-resource.js',
      'app/assets/js/angular/angular-sanitize.js',
      'app/assets/js/angular/angular-animate.js',
      'app/assets/js/angular/angular-touch.js',
      'app/assets/js/angular/angular-route.js',
      'app/shared/app.mdl.js',
      'app/shared/**/*.js',
      'app/modules/page-home/*.js',
      'app/assets/js/angular/angular-mocks.js',
      'test/unit/**/controllersSpec.js'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    exclude: [

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
        //'PhantomJS'
        'Chrome'
        // , 'Firefox'
        // , 'Safari'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false

  });
};