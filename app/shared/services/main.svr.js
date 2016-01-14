/* global angular:false */
/*jshint unused:false */
/*jslint browser: true*/

(function () {

  'use strict';

  //Use it in cross controllers updates
  function ReuseSrv(){
    this.default_data = {
      
    };
  }

  // @ngInject
  function RestSrv($resource, $location, $http, $rootScope) {
    var apiBase;

      switch($location.host()) {
      //DEV environment
      case 'dev-environment':
        apiBase = 'http://dev-environment-api';
        break;
      //CLI environment
      case 'cli-environment':
        apiBase = 'http://cli-environment-api';
        break;
      //LIVE environment
       case 'live-environment':
          apiBase = 'http://live-environment-api';
          break;
      //LOCAL environment
      default:
        apiBase = 'http://dev-environment-api';
      }



    var obj = {
        Service: function(){
          var params = {
            username:'username',
            token: 'token6',
            format: 'jsonp',
            callBack: 'JSON_CALLBACK'
          };
          //Local call dont use resolve in app route
          var promise = $http({method: 'GET', url: 'assets/data/default.json'})
            .success(function(data) {})
            .error(function(data,status){
              $location.path( '/error' );
            });
          
          //Restfull call
          // var promise = $http({method: 'JSONP', url: apiBase+'/yourcall' , params: params})
          // .success(function(data) {})
          // .error(function(data,status){
          //   $location.path( "/error" );
          // });
          return promise;

        },

        //sending parameters
        getElm: function(ele){
          var params = {
            ele_id: ele.id,
            username:'username',
            token: 'token6',
            format: 'jsonp',
            callBack: 'JSON_CALLBACK'
          };
          var promise = $http({method: 'JSONP', url: apiBase+'/yourcall' , params: params})
          .success(function(data){})
          .error(function(data,status){
            $location.path( '/error' );
          });
          return promise;
          
        }
    };
     
    return obj;
  }

  /** Dependency Injection Array for minification **/
  RestSrv.$inject = ['$resource', '$location', '$http', '$rootScope'];

  angular.module('MainApp')
   .factory('restSrv', RestSrv)
   .service('reuseSrv', ReuseSrv);

})();