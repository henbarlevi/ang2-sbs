//with ES6 modules:
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module.js';

 platformBrowserDynamic().bootstrapModule(AppModule);

// //without ES6 modules:
// (function(app) {
//   var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
//   var AppModule = app.AppModule;

//   platformBrowserDynamic().bootstrapModule(AppModule);

// })(window.app || (window.app = {}));
