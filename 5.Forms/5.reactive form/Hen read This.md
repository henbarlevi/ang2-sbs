
* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the TypeScript code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

This example is part of the **Angular 2 From The Ground Up** course by Mirko Nasato.

changes included:
-add the bootstrap file in index.html
-in order to use ngModel and other features of angular with forms:
1.include FormsModule in the app.module
2.include the '@angular/forms' in the package.json
3.add FormsModule to the app.module imports
otherwise exception :Can't bind to 'ngModel' since it isn't a known property of 'input'.
4.look at the template local variable #emailfield in the signup-from.component