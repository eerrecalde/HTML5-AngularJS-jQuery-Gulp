/* global angular:false, $:false, s:false */
/*jshint unused:false */
/*jslint browser: true*/



(function () {

  'use strict';
	angular.module('OmnitureMdl', [])
   .service('omnitureSrv', [function(){

		var obj = {};

		obj.defaults = {
			pageName : "", 
			server : window.location.hostname,
			charSet : "UTF-8",
			channel : "channel", 
			pageType : "",
			prop1 :  this.pageName,
			prop11 : "prop11",
			prop12 : "prop12",
			prop13 : "prop13",
			prop14 : "en",
			prop15 : "prop15",
			events : null
		};

		obj.setDefaults = function(props){
			obj.defaults.pageName = props.pageName || "", 
			obj.defaults.server = props.server || window.location.hostname,
			obj.defaults.charSet = props.charSet || "UTF-8",
			obj.defaults.channel = props.channel || "channel", 
			obj.defaults.pageType = props.pageType || "",
			obj.defaults.prop1 =  props.prop1 || this.pageName,
			obj.defaults.prop11 = props.prop11 || "prop11",
			obj.defaults.prop12 = props.prop12 || "prop12",
			obj.defaults.prop13 = props.prop13 || "prop13",
			obj.defaults.prop14 = props.prop14 || "en",
			obj.defaults.prop15 = props.prop15 || "prop15",
			obj.defaults.events = props.events || null
		};

		obj.track = function(props){
			
			// Defaults
			s = $.extend(s, obj.defaults);

      if(props.pageName){
				s.pageName = props.pageName;
				s.prop1 = props.pageName;
				s.hier1 = props.pageName;
			}

			//propObject will brind the prop number and the string to be send
      if(props.propObj){
      	s[propObj.numb] = props.propObj.str;
      }

      if(props.evarObj){
      	if(props.evarObj.constructor === Array){
      		$.each( props.evarObj, function( key, value ) {
					  s[value.numb] = value.str;
					});
      	}else{
      		s[evarObj.numb] = props.evarObj.str;
      	}
      }
			
			//events will send the events
      if(props.events){
      	s.events = props.events;
      }

      $.each( props, function( key, value ) {
			  s[key] = value;
			});

      /* Hierarchy Variables */

      var sCode=s.t();
      if(sCode){
      	document.write(sCode);
      }

      s.tl(this,'o', props.stlInfo);  
		};

		return obj;
 
  }]);

})();
