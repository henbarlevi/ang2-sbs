A simple variant of the Hangman game in Angular 2.
Used to show how to write and run unit tests with Jasmine and Karma.

To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the TypeScript code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).


in order to create build step and use typescript:
after changing the mask.pipe.spec to typescript there will be errors
because the jasmine global function (describe, it.expect etc..) are not known
to the typescript compiler (because they are writen in ES5)
so we need to add type definition for jasmine:
(npm bin)/typings install --save --global dt-jasmin

setting karma test runner:
1.npm install --save-dev karma karma-jasmine karma-webpack karma-chrome-launcher 

the way we are going to run our test is by letting webpack create a bundle.js
of all the code requierd by the test and then use karma to run the test in the browser
2.we need an entry point for our tests (similar to main.ts that is the entry point of our app)
-create specs.ts file for that:

in this file core-js , reflect-metadata and zone.js are needed:
        "zone.js": "0.6.23" - allow angular to know when async opertion complete so angular get trigger its change detection
        "reflect-metadata": "0.1.8", - polyfill for metadata reflection api - allows angular to use the metadata we pass to the Component decorator for example
        "core-js": "2.4.1", - provides ES6 support for browsers that dont support ES6 (polyfill)
also we need to import there all the tets files - mask.pipe.spec for example

3.we also need a config file for the karma test runner - create 'karma.conf.js' file - look their for more understanding

4.to run the test we can type karma start
instead we can add script to package.json:
"test" : "karma start" - and then we can run tests by writing - npm test