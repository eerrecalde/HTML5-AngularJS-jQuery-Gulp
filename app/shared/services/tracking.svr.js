/* global angular:false, $:false, s:false */
/*jshint unused:false */
/*jslint browser: true*/



(function () {

  'use strict';
	function TrackingSys(){

		this.tracking = function(pageName, propObj, evarObj, events, stlInfo){
			//console.log(arguments);
			s.server=window.location.hostname;
	        s.charSet='UTF-8';
	        s.channel='mpc';
	        s.pageType='';
	        if(pageName !== ''){
	  			s.pageName= pageName;
	  		}

			//propObject will brind the prop number and the string to be send
	        if(propObj !== ''){
	        	//clean props
	        	s[propObj.numb] = propObj.str;
	        }else{
	        	//clean props
	        }

	        //evarObj will brind the eVar number and the string to be send
	        if(evarObj !== ''){
	        	//If evarObj is a array send both eVar info
	        	if(evarObj.constructor === Array){
	        		$.each( evarObj, function( key, value ) {
					  s[value.numb] = value.str;
					});
	        	}else{
	        		s[evarObj.numb] = evarObj.str;
	        	}
	        	
	        }else{
	        	//clean eVars i.e. s.eVar2=null;
	        }


	        //evants will send the events
	        if(events !== ''){
	        	s.events = events;
	        }else{
	        	//clean events
	        	s.events=null;
	        }

	        /* Conversion Variables */
		    /* Hierarchy Variables */
	        s.hier1=s.pageName;
	        var sCode=s.t();
	        if(sCode){document.write(sCode);}

	        s.tl(this,'o', stlInfo);  
		};
 
  	}
 


  /** Dependency Injection Array for minification **/
  TrackingSys.$inject = [];

  angular.module('ui-tracking', [])
   .service('TrackingSys', TrackingSys);

})();
