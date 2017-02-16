# Random Quote - TypeScript

A simple Angular 2 web application that displays a random quote on the page.

To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the TypeScript code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

main changes from 2.From ES5 to Es6 Project:
*package.json replace babel compiler in TypeScript compiler in the devDependencies and build:"tsc"
*the config file of TypeScript - tsconfig.json that include target and resource folder config of code convert from TypeScript to ES5
*added 'quote.model.ts' file that contain an interface of Quote (IQuote)
*changed src files syntax to TypeScript declaring vars types and function arguments and return types