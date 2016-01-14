/* global angular:false */
/*jshint unused:false */

(function () {
  'use strict';

  function Show(){
    this.data = {
      visibility: false,
      tpl: '',
      theme:''
    };
  }

  //Directive trigger overlay
  // @ngInject
  function OverlayTrigger(show){  

    var link = function(scope, elem, attrs){
      
      //update overlay stage and template
      elem.bind('click', function(){
        show.data.visibility = true; 
        show.data.tpl = attrs.overlaytpl;
        show.data.theme = attrs.theme;
      });

    };

    return{
      restrict: 'A',
      scope: {
        overlayTpl: '@',
        theme: '@'
      },
      link: link
    };
  }

  //Directive Overlay
  // @ngInject
  function OverlayDirective(show, $timeout){

      var link = function(scope) {

         //show overlay template
          scope.getTplUrl = function() {
            return show.data.tpl;
          };

          scope.getTheme = function(){
            return show.data.theme;
          };
          //Set overlay stage
          scope.show = function(){
            return show.data.visibility;
          };

          //update overlay stage
          scope.hideModal = function() {
            show.data.visibility = false;
            show.data.tpl = '';
            show.data.theme = '';
          };

          scope.$on('closeOverlay', function(event, data) { 
            scope.hideModal();
          });

          scope.$on('updateOverlay', function(event, data) { 
            show.data.tpl = data.tpl;
            //console.log(show.data.tpl)
          });

          
           
      };

      return{
        restrict: 'EA',
        scope: {
          show: '='
        },
        replace: true, // Replace with the template below
        link: link,
        template: '<div class="mod-overlay" ng-show="show()">'+
                    '<div class="overlay-wrap" ng-click="hideModal()"></div>'+
                    '<div class="overlay-container {{getTheme()}}">'+
                      '<div class="overlay-close" ng-click="hideModal()"></div>'+
                      '<div class="overlay-tpl grid-container" ng-include="getTplUrl()"></div>'+
                    '</div>'+
                  '</div>'
      };
  }

  /** Dependency Injection Array for minification **/
  OverlayTrigger.$inject = ['show'];
  OverlayDirective.$inject = ['show', '$timeout'];
  

  angular.module('ui-overlay',['ngAnimate'])
        .directive('modOverlay', OverlayDirective)
        .directive('triggerOverlay', OverlayTrigger)
        .service('show', Show);
  }());