/* global angular:false */
/*jshint unused:false */

(function () {

	'use strict';
	
	// @ngInject
	//only apply mainSrv if using restfull
	//function HomeCtrl($scope, mainSrv, reuseSrv, $location, TrackingSys){
	function HomeCtrl($scope, restSrv, reuseSrv, $location, TrackingSys){

		//Use this code below with restfull
		//Check if there's a problem with the server
		// if(!mainSrv.data.success || (mainSrv.status !== 200)){
		// 	$location.path( "/error" );
		// 	return;
		// }
		// var main = this;
		// var data = mainSrv.data.data;


		//Use this code below with local call (json)
		var main = this;
		var datas = restSrv.Service();
		datas.then(function(data){
				console.log(data.data.data);
		});
		


		main.title = 'Add the main content here.';
		
		//ANALYTICS onLoad. Only to be used if have omniture code
		//function(pageName, propObj, evarObj, events, stlInfo)
		//TrackingSys.tracking('','','','','');

	}	

	/** Dependency Injection Array for minification **/
	//HomeCtrl.$inject = ['$scope', 'mainSrv', 'reuseSrv', '$location', 'TrackingSys'];
  	HomeCtrl.$inject = ['$scope', 'restSrv', 'reuseSrv', '$location', 'TrackingSys'];

	angular.module('MainApp')
        .controller('homeCtrl', HomeCtrl);

}());