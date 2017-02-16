To work on this project:
* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the TypeScript code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

making http request to get the quote in the quote.json file(localhost:8080/quote.json) 
in order to send http request we need to 
1.install the package @angular/http as mentioned in the package.json
2.import { Http} from '@angular/http' - if we use it in a service( a class without @Component) we need to add the @Injectable;
3.import { HttpModule} from '@angular/http'; and add it to the import in the app.module
4.import 'rxjs/add/operator/toPromise'; //import toPromise functionallity (in main.ts cause its let use it in the whole application)
-------------------
explenation about the differences between callbacks and promises
are in app.Component.ts