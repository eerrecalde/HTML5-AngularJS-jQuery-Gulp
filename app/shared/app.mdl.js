/* global angular:false */
/*jshint unused:false */

(function () {
  'use strict';

  // @ngInject
  function Rooter($locationProvider, $routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'components/page-home/home.tpl.html',
          controller: 'homeCtrl',
          controllerAs: 'main'
          //Just use resolve if using restfull call
          // resolve: {
          //   mainSrv: ['restSrv', function(restSrv) {
          //       return restSrv.Service();
          //     }]
          // }
        })
        .when('/error',{
          templateUrl: 'components/page-error/error.tpl.html'
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(false).hashPrefix('!');
  }

  /** Dependency Injection Array for minification **/
  Rooter.$inject = ['$locationProvider', '$routeProvider'];

  angular.module('MainApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ui-tracking',
      'ui-scroll-to',
      'ui-overlay',
      'include-cleaner'
    ])
    .config(Rooter)
    .run(['$rootScope', function($root) {
      $root.$on('$routeChangeStart', function(e, curr) {});
      $root.$on('$routeChangeSuccess', function(e, curr) {});

    }]);

})();