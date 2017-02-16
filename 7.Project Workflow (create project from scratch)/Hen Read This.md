How to set up a project that support production build step:
1.Compile Typescript (or ES6) to ES5
2.run local Development server
3.Reload on Save Functionallity - every time we save a change the application reload automatically
----we already used features above in previous examples---
4.generate self contained "dist" folder - that ready to be upload to the server as static files
5.be able to execute different code for dev/prod
6.Minify/Obfuscate js core - minimize the code by removing spaces and short vars names etc..
7.Bundle all js code into a single file - browser download single file more quickly
and more...


how to build a project from scratch?:
1.use Angular CLI that create angular 2 project structure with all the dependencies needed
2.use webpack - popular module bundler.
-------------------------------------------------------------------
Set Project from scratch with Angular CLI:
1.install CLI using npm - in the cmd: npm install -g angular-cli
now we can use new command :ng
(to check if it exist can type : ng -v
2.to create new project - in cmd: ng new [project name] for exmaple : ng new my-app
the cli created folder that contain all dependencies and files for basic project
NOTICE -the components of the project contain templateUrl, and for that to work we need to use moduleId that declare which module contain the resource 
3.to run the projcet in Development mode - in projcet foldeר - cmd: ng server
- copy the app address (show in the cmd) to the browser
4.ng help in cmd will show all possible commands
-in project folder - ng build -dev  -build app in dev mode
                     ng build -prod -build app for production
5.CLi support tests - in cmd : ng test

Set Project From scratch using webpack - all process explained in /Hen Read This Create projcet from scratch.md