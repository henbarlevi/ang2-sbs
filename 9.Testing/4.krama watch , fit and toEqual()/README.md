
A simple variant of the Hangman game in Angular 2.
Used to show how to write and run unit tests with Jasmine and Karma.

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the TypeScript code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

1.in the package.json we have:
    "test": "karma start --single-run", - for runing the tests once
    "test:watch": "karma start" - for rerun the tests for each change
2.to run a single test with jasmine we can use 'fit' function instead of 'it' (look at letter-buttons.spec)
3.toBe() - strict equality compare , toEqual() - compare the content  (look at letter-buttons.spec)