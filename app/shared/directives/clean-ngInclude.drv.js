  /* global angular:false */
  /* jshint unused:false */
(function(){
  'use strict';
  

  // @ngInject
  function IncReplace($compile){
      return {
          require: 'ngInclude',
          restrict: 'A', /* optional */
          priority: 1, 
          link: function (scope, el, attrs) {
 
              el.replaceWith(el.children());

            }
        };
    }

  /** Dependency Injection Array for minification **/
  IncReplace.$inject = ['$compile'];

  //Use this Directive to replace ng-include tag with the directive template 
  angular.module('include-cleaner', [])
  .directive('includeReplace', IncReplace);

})();

