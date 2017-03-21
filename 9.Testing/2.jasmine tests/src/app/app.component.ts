import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Guess The Word</h1>
    <p>{{solution}}</p>
  `
})
export class AppComponent {

  solution = 'ANGULAR';
  selection = '';

}
