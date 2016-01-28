HTML5 AngularJs Gulp seed
=================

Angular &amp; Gulp including: unsemantic "sass" (grid only) and other js to support IE8+

##Modular Angular
#### 1. Structure
***
*** In the app folder ***  

**shared folder**: 
It contains the main app module, main services/factory and general directives.

**components folder**: 
It's only an example in how to separate partials, components and pages.

**assets folder**:
It holds and style, data, fonts, images and vendor js

#### 2. Naming conversions & structure guide
***
** Naming files **  

All the files should have extensions. It improves readability and helps with automation.  
I.E. The main app should always be: name.mdl.js, or a controller should be name.ctrl.js6
View list below:  

* Main app: filename.mdl.js
* Controller: filename.ctrl.js
* Directive: filename.drv.js
* Service: filename.svr.js
* Template: filename.tpl.html
* Filter: filename.flt.html

** Naming folders **    

Each folder will contain it's own template, controller, filter, directive, etc  

* Pages: page-pageName
* Partials: partial-partialName
* Modules&components: mod-moduleName

***If you need to create a group of independent/common filters or directives please add it to share folder. Only if is not relate to a module/component(functionality)***

#### 3. Development
***

1. Pages should be integrate strainght to the main app. View home.ctrl.js (end lines)
2. Components/modules/ some general directives and filters should be independent and added as a dependency to the main app.

#### 4. Extra files added to this skeleton
***
1. overlay directive
2. scroll-to directive

**1. The Overlay directive**  
_ _ _
It is componsed of 2 directives and one service.  
Please include the style in your project importing inside your main sass.  

***The overlay service "show"***  

1. Inject the service "show" in the controller where you want to use the overlay. This will administrate the visibility, template and theme of your overlay.  

2. Add the template holder to the html <div mod-overlay show='modalShown'></div>

***How to use in your project***  
inject "ui-overlay" to your main app module.  

`angular.module('MainApp', [
      'ui-overlay'
    ])  `

Add the line below to any html tag. Create a css style and call it in the "theme", add the path to the template you want to open inside the overly in the "overlayTpl"

trigger-overlay overlayTpl="components/mod-comparison/comparison.tpl.html" theme="Your choice"


**2. The scroll-to directive** 
inject "ui-overui-scroll-to" to your main app module.  
 
`angular.module('MainApp', [
      'ui-scroll-to'
    ])  `
    
This directive will trigger view parts of the page. Excelente to get analitics in sigle pages or hide and show parts of the page. I will be updating more info about this directive soon.  
This is a fix for our analytics trigger in a single scrollable page content. But we can use it for other data collection.  
 
*Be aware this need changes to improve performance.*

***How to use in your project***  

Add a trigger class to the block of content you want to trigger. add the data info in want to collect.  

So far I added visitility (to hide and show elements) and analytics info.  
You can add more data fields adding the data-"info you want" to the template and in the scroll-to directive you edit getTrigger and lookForTriggers function to make data available.  
At the moment I'm usign `$rootScope.$broadcast` to update the data but it can be done in differente ways. 


`<div id="intro" data-visibility="hide" data-analytics="Header" class="trigger"></div>`

#### 4. Gulp task runner
***

This seed uses gulp to minify, concatenate, compress images, autoprefix css, template cache system, jshint and sass compiler.    
We are using  gulp-angular-templatecache to collect all templates. I'm defining the templatets in var pathDev > tpl (I added all files with .tpl.html) and defining the module in the tplCache task.  
Example:  

gulp.task('tplCache', function (){  
  
  	 gulp.src(pathDev.tpl)
   		.pipe(req.angularTemplatecache({ module: 'MainApp' }))
   		.pipe( gulp.dest(req.if(gulpTask, pathProd.tpl, pathDev.temptpl)) );  

}); 

You can edit Gulpfile.js to adapt to your needs.

*** How to use it ***
***
1. in the terminal cd to your project folder $cd project_folder
2. $npm install
3. $gulp server (to run project and you can edit it. This will refresh the page)
4. $gulp build (this will create the dist folder with concatenated files and compressed imgeas)
5. $gulp build --prod (this will generate dist folder for production)
6. to test dist folder you can $gulp server:dist (this will show the files in the dist folder)

*Gulp has a server that opens your localhost autmoatically and it comes with livereload*
