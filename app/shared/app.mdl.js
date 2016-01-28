/* global angular:false */
/*jshint unused:false */

(function () {
  'use strict';

  // @ngInject
  function Rooter($locationProvider, $routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'modules/page-home/home.tpl.html',
          controller: 'homeCtrl',
          controllerAs: 'hc'
        })
        .when('/error',{
          templateUrl: 'modules/page-error/error.tpl.html'
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
      'OmnitureMdl'
    ])
    .config(Rooter)
    .run(['$rootScope', function($root) {
      $root.$on('$routeChangeStart', function(e, curr) {});
      $root.$on('$routeChangeSuccess', function(e, curr) {});

    }]);

})();