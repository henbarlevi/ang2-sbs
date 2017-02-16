# Random Quote - ES6

A simple Angular 2 web application that displays a random quote on the page.
not all browsers support ES6 so we are using babel (npm package) that convert ES6 to ES5
To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the ES6 code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

notice the changes the babel did from the Src folder(ES6) to the app folder(ES5):
*template syntax in the app.component
*callback syntax in rnadom-quote.component - we can delete the word 'function' //(src/random-quote.component)
and replcace it as landa expression, and we can also ignore the 'this' problame //(src/random-quote.component)
*declare a 'let' instead of 'var' in order to declare variable blocked scope//(src/quote.service)
*declare a 'const' for variables that assign value to them only once 
*declare class in ES6 ////(src/quote.service) + (src/app.component)
*declare component with decorators include injecting service ////(src/random-quote.component) + (src/app.component)
*declare Module with decorators // src/app.module.js
//----------------------------------------------------
basically all files in the 'src' folder showing use of the
new features of ES6 and showing the changes from bottom to top 
(top = newest bottom = oldest)
*NOTICE - look at index.html to see the changes made in order to use ES6 Modules (import/export)