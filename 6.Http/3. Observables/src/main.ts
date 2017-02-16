import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import 'rxjs/Rx'; //import all Rx functionallity - 'rxjs/Rx' is The Reactive Extensions for JavaScript (RxJS) is a set of libraries for composing asynchronous and event-based programs
//import 'rxjs/add/operator/toPromise'; //import toPromise functionallity
platformBrowserDynamic().bootstrapModule(AppModule);
