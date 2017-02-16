building angular 2 project from scratch:

1.opend new project folde (angular2-starter)
2.open 'src' folder that all files inside will be compiled to ES5
3.create new index.html files
4.paste the basic html structure from angular2-starter-snippets
5.add the root custom component to the index.html (i called it my-app : <my-app>loading..</my-app>)
6.create sub folder for application code:
inside 'src' folder - creating 'app' folder
7.creating app.component.ts file inside 'app' folder and
entering inside the code: 
import {Component } from '@angular/core';
@Component({
    selector:'my-app',
    template:'<h1>hello<h1>'
})
export class AppComponent{
    
}
to use this package we need a package.json file that describe all project package dependencies
8.create package.json file inside root folder of projcet (angular2-starter)
entering the code:
{
    "name": "angualr2-starter", - project name
    "version": "0.1.0", - project version -whatever we like 
    "dependencies": {
        "@angular/common": "2.0.0", - requierd by other angular modules
        "@angular/compiler": "2.0.0", - needed in order to compile templates we write in our Components
        "@angular/core": "2.0.0", - contain @Component module
        "@angular/forms": "2.0.0",
        "@angular/http": "2.0.0", - contain http services
        "@angular/platform-browser": "2.0.0", - @angular/platform-browser-dynamic will merge to it
        "@angular/platform-browser-dynamic": "2.0.0", - contain bootstap method
        "@angular/router": "3.0.0",
        "core-js": "2.4.1", - provides ES6 support for browsers that dont support ES6 (polyfill)
        "reflect-metadata": "0.1.8", - polyfill for metadata reflection api - allows angular to use the metadata we pass to the Component decorator for example
        "rxjs": "5.0.0-beta.12", //provide observables functionallity used in http client
        "zone.js": "0.6.23" - allow angular to know when async opertion complete so angular get trigger its change detection
    }
}
9.open cmd in project folder and write : npm install - to install all dependencies
and create node_modules folder with all packages
10.add main.ts to 'src' folder that contain the code for bootstraping the app:
11.we need the typescript compiler in order to compile the typescript files to ES5 files
-open cmd in project folder and write:
 npm install --save-dev typescript@2.0.2 
(--save-dev -save it to package.json dev dependencies, version 2.0.2 or pick other stable version)
12.the typescript compiler requier some configuration that lives in file named 'tsconfig.json'
create file 'tsconfig.json' in project folder
and insert:
{
    "compilerOptions":{
        "target": "es5", - what code to generate from typescript to
        "experimentalDecorators": true, - alllow decorators @Component,@Injectible  and so on
        "emitDecoratorMetadata": true - allow angular to use the metadata (like template: in Component)
    }
}

13.the node_modules/bin folder contain executable commands like :tsc which is the typescript compiler
that compile the code from typescript to es5
so in order to run tsc we need to enter '.bin' folder on cmd - we gettin it by:
-open project folder in cmd :npm bin
-after entering '.bin' folder in cmd:tsc --rootDir src --outDir dist 
(for all commands tsc -h)

14.we have errors because typescript compiler see he cant find the implemintation for ES6
methods we used in the ts files (for example promises), we need to tell the typescript compiler that 
that we have package (core-js) that polyfill those methods in ES5 (typescript cant read core-js directly cause its writen in ES5)
the 'typings' package do that for us:
cmd:npm install --save-dev typings

15.enter '.bin' folder again and in cmd:
typings search core-js - to search the core-js package
typings install --global --save dt~core-js
-it will create a typings folder and typings.json file 
that contain the list of type definition for the project
if we write :typings install it will install everything specified in typings.json
the typings types definitions (like promise definition, ) - in our project it describe
what core-js does in a way that make sense to the typescript compiler (by declaring interfaces and type annotations)

16.we dont need to write tsc every time we want to build the project
we can use npm script to simplify it
in packge.json enter "scripts" section:
"script"{
    "build":"tsc --rootDir src --outDir dist"
}

now we can type : 'npm run build' - to build the project

17.adding '.gitignore' file - this file list all the files that 
we dont wont to store into version control (old versions of the project)
dist/
node)modules/
typings/
when people pull that project version they wont get it with unessecary extra files
and they only need to write npm install.

18.npm install will install dependencies but it wont include the type definition
-in order to make npm install command do that to we add to "scripts" section
in the packge.json:
"postinstall :"typings install" -'postinstall' is special cmnd that execute automaticaly after npm install

19.
