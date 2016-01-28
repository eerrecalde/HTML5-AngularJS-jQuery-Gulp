/* global angular:false */
/*jshint unused:false */

(function () {

	'use strict';
	
	// @ngInject
	//only apply mainSrv if using restfull
	angular.module('MainApp')
  .controller('homeCtrl', ['$scope', '$location', 'omnitureSrv', function($scope, $location, omnitureSrv){

		var hc = this;

		hc.sectionTitle = 'Section title';

	}]);

}());