import { Component } from '@angular/core';

@Component({
  selector: 'angular-tunes',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `//<router-outlet> - the view that this tag will show will be determine by the route rules in the app.routing.ts
})
export class AppComponent { }
