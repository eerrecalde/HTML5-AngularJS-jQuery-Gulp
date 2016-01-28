/* global angular:false */
/*jshint unused:false */

(function () {
  'use strict';

angular.module('MainApp')
.controller('headerCtrl', ['$scope', 'omnitureSrv', function($scope, omnitureSrv){

	var head = this;
  head.title = 'Page Title';

}]);


}());