
* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

to use routing:
1.install the npm package for routing (@angular/router)
2.create app.routing.ts file that will contain the routing rulse and import RouterModule from @angular/router 
3.in app.routing.ts use the RouterModule.forRoot method and export the return value 
the method accept array of routes , each rout is an object
with props of path: and component, for exmaple:
{
    path: 'artists',
    component:ArtistsListComponent
}this route say when the url is '/artists' - show the ArtistsListComponent
4.import the routing module from the app.routing.ts file created into the app.module.ts file
and add it to imports module
5.we need to import LocationStartegy, the default one requiers more setup so
we use HashLocationStrategy for now
import {LocationStartegy,HashLocationStrategy} from '@angular/common';
and add it to the providers:
providers:[
    {provide: LocationStartegy , useClass:HashLocationStrategy}
]
6.use <router-outlet></router-outlet> in the app.component to say that app.component
is infulence by the routing rules, which means the default path rule (localhost:8080/) will
decide which component will be showed (see routinh rules in app.routing.ts)
{
    path: '',
    redirectTo: '/artists',
    pathMatch: 'full' //match to this route if the full path is '' emptystring
  }
7.to create link to another route path use the [routerLink] directive:
[routerLink]=[{route path},path params(optional)]" so on click that link it will change the path , and changing the path will change the view
8.to get params value from path, inside the component that navigated to (artist-detail.component.ts)
import {ActivatedRoute} from '@angular/route'; - ActivatedRoute is class that represent the active route
(the route is currently in use)
use that class to get the params : route.snapshot.params - object that contain keys - params name values:params values
***but that wont work in caching case so its better use the route.params observable insread
**dont forget to unsubscribe when the component is destroyed to prevent memory leak