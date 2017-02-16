// we have 4 ways of Data Binding:
// Interpolation {} - data from component sends to the DOM (View)
// One Way Binding [] - data from component sends to the DOM (View)
// Event Binding () - data from DOM (View) sends to the component
// Two Way Binding [()] - data in hte component affect the DOM and the opposite

import { Component } from '@angular/core';

//Two way Binding with ngModel and ngModelChange:
// @Component({
//   selector: 'currency-converter',
//   template: `<input type="number" [ngModel]="dollarValue" (ngModelChange)="update($event)" /> USD = 
//            <strong>{{dollarValue}}</strong> Dollars =
//            <strong>{{shekelValue()}}</strong> Shekel
//            `//$event - dollarValue
// })
// export class AppComponent {
//   dollarValue = 1; //default val
//   exchangeRate = 4; //exchange rate to shekel
//   update(event): void {
//       console.log(event + ' ' + typeof event); //the $event passed with the ngModelChange is dollarValue as number
//       this.dollarValue = event; //updating the dollarValue
// }
//   shekelValue():number{
//       return this.dollarValue*this.exchangeRate;
//   }
// }
//-----------------------------------------------------
//Two way Binding only with ngModel and Shorter Syntax:
@Component({
  selector: 'currency-converter',
  template: `<input type="number" [(ngModel)]="dollarValue" /> USD = 
           <strong>{{dollarValue}}</strong> Dollars =
           <strong>{{shekelValue()}}</strong> Shekel
           `// [(ngModel)] - two way binding for dollarValue
})
export class AppComponent {
  dollarValue = 1; //default val
  exchangeRate = 4; //exchange rate to shekel
 shekelValue() :number{
      return this.dollarValue*this.exchangeRate;
  }
}
