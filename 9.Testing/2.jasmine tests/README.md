
A simple variant of the Hangman game in Angular 2.
Used to show how to write and run unit tests with Jasmine and Karma.

To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the TypeScript code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

*in this lecture will write the files in js (not in typescript) to make things
simple without a build step, next lecture we will convert it to typescript

in order to use jasmine to create unit tests:
1.install package - npm install --save-dev jasmine-core
2.the convetion of test file is with .spec :
mask.pipe.spec.js is file that contain unit tests for mask.pipe.js
-look in mask.pipe.spec to see jasmine unit tests syntax