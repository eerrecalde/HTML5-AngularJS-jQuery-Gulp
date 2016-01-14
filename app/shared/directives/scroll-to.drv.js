/* global angular:false */
/*jshint unused:false */
/*global $:false */
/*jslint browser: true*/

'use strict';

(function () {

  //Trigger list collection
  function triggerList($timeout, $window, $rootScope){
    //Obj reference - > all based on elements with class ".trigger"
    var triggerObj = {
        triggersArr: [], //store each element as obj with id, height, top position and bottom position
        triggerTopMin: null, //store top positon of the whole app
        triggerBottomMax: null //store the bottom position of the app
    };

    //get attr of all elements with class (".trigger") and save them in the triggersArr
    var getTrigger = function(element){
        var triggerList = element.find('.trigger');

        $.each(triggerList, function(){
          var item = $(this),
              itemHeight = item.outerHeight(),
              min = item.offset().top, //adjust position
              max = item.offset().top + itemHeight;

              //get data-visibility attr and save
              //to help show/hide icons on top nav
              triggerObj.triggersArr.push({'item': item.attr('id'), 'visibility': item.attr('data-visibility'), 'analytics': item.attr('data-analytics'), 'itemH': itemHeight,  'min': min, 'max': max});
              if(triggerObj.triggerTopMin === null || (triggerObj.triggerTopMin && triggerObj.triggerTopMin > min)){
                triggerObj.triggerTopMin = min;
              }
              if(triggerObj.triggerBottomMax === null || (triggerObj.triggerBottomMax && max >= triggerObj.triggerBottomMax)){
                triggerObj.triggerBottomMax = max;
              }
        }); 

    };


    //To be used when scrolling window
    //It will detect element and its visibility effect on top menu icons
    var lookForTriggers = function(top){
      var element;  
      
      $.each(triggerObj.triggersArr, function(key, val){
        var topMin = val.min;

        if(top >= topMin && top <= val.max + val.itemH){
            //console.log(val)
            element = {'id': val.item, 'visibility': val.visibility, 'analytics': val.analytics };
        }
      });

      return element; 
    };

    //it will help change top nav icons visibility in some window position
    var triggerMenuVisibility = function(elmVisibility){
      //console.log('elemVisi: ' +elmVisibility)
      $rootScope.$broadcast('menuVisibility', elmVisibility);
    };

    var triggerPosId = function(elmId){
      //console.log('elemId: '+elmId);
      $rootScope.$broadcast('elmId', elmId);
    };

     var triggerAnaliticsScroll = function(dataAnalytics){
      //console.log('dataAnalytics: ' +dataAnalytics);
      $rootScope.$broadcast('dataAnalytics', dataAnalytics);
    };

    var onScroll = function(){
      var elmVisibility,
          elmId,
          analyticsTrigger;

      $(window).scroll(function(){
        if($(window).scrollTop() >= (triggerObj.triggerTopMin) && $(window).scrollTop() <= triggerObj.triggerBottomMax) {
                
              var el = lookForTriggers($(window).scrollTop()),
                  //visitility is coming from data-visibility attr in all elements with trigger class
                  //to help show/hide icons on top nav
                  anchor = el.visibility,
                  //element Id
                  activePos = el.id,
                  //element analytics data
                  dataAnalytics = el.analytics;

                  //console.log(el)

              if(anchor !== elmVisibility){
                elmVisibility = anchor;
                //Change menu visibility
                triggerMenuVisibility(elmVisibility);
              }   

              if(activePos !== elmId){
                elmId = activePos;
                triggerPosId(elmId);
              } 

              if(dataAnalytics !== analyticsTrigger){
                analyticsTrigger = dataAnalytics;
                triggerAnaliticsScroll(dataAnalytics);
              }
        }
      });
    };


    //scroll to directive starting point
    var link = function(scope, element, attrs){
      //watch onScroll function
      onScroll();
      //Get all the elements with ".trigger" class and
      //store reference in a object
      $timeout( function() {
             getTrigger(element);
             //trigger analytics on first load page
             triggerAnaliticsScroll('Header');
      }, 2000);
    };

    return{
      restrict: 'A',
      link: link
    };

  }

  triggerList.$inject = ['$timeout', '$window', '$rootScope'];

  angular.module('ui-scroll-to', [])
    .directive('triggerList', triggerList)
    .run(['$rootScope','$location',function($root, $location) {

      

        //initialization code
        // if(!$location.$$hash){
        //    $("body,html").animate({scrollTop: 0}, 'slow');
        // }
    }]);

}());