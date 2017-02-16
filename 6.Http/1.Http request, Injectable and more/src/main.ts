import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
//import 'rxjs/Rx'; //import all Rx functionallity
import 'rxjs/add/operator/toPromise'; //import toPromise functionallity
platformBrowserDynamic().bootstrapModule(AppModule);
