import { Component } from '@angular/core';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [(ngModel)]="baseAmount"
      [class.error]="isInvalid(baseAmount)" /> USD
    = <strong>{{targetAmount}}</strong> GBP
  `,//[class.error]="isInvalid(baseAmount)" - adding to input the class named 'error' depends on the bool value from isInvalid(baseAmount) - true/false
//we can also instead :
//[style.backgroundColor] = "isInvalid(baseAmount) ? 'red': 'white' // set the element style.background to value depend on the isInvalid value returned
//Or:
//[ngClass] ="{error: isInvalid(baseAmount)}" // adding to input the class named 'error' depends on the bvool value from isInvalid(baseAmount) - true/false
  //adding the css style:
  styles: [`
    input[type=number] {
      width: 10ex;
      text-align: right;
    }
    .error {
      background-color: #ff6666;
    }
  `]
})
export class AppComponent {
  exchangeRate = 0.70;
  baseAmount = 1;
  get targetAmount() {
    return this.baseAmount * this.exchangeRate;
  }
  isInvalid(value) { //value = baseAmount
    return !Number.isFinite(value); //return true unless value = null | undefiend | NaN
  }
}
