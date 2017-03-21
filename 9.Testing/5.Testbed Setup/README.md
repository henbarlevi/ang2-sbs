
To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the TypeScript code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

in order to test component templates we need to setup TestBed:
1.import TestBed in the specs.ts - because we want to initialize it for all our tests (look in specs.ts)
*we also need to import 3 zone libs (look in specs.ts)

2.in order to write test for templates we first need to invoke the beforeEach() func that contain the testing module as an argument
(its like an ngModule for a test were we declare the components and services we need)
see the letter-buttons.spec for more details