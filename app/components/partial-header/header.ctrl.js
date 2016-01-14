/* global angular:false */
/*jshint unused:false */

(function () {
  'use strict';

  // @ngInject
  function HeaderCtrl($scope, reuseSrv, TrackingSys){

  	var head = this;
    head.title = 'Here is the header';

  }
  /** Dependency Injection Array for minification **/
  HeaderCtrl.$inject = ['$scope', 'reuseSrv', 'TrackingSys'];

angular.module('MainApp')
    .controller('headerCtrl', HeaderCtrl);

}());