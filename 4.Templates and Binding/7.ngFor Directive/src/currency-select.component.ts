//Using ngFor Directive:

import { Component, Input } from '@angular/core';

@Component({
  selector: 'currency-select',
  template: `
    <select [ngModel]="selected">
      <option *ngFor="let currency of supportedCurrencies" [value]="currency">
        {{currency}}
      </option>
    </select>
  `
  //[ngModel] - ngModel bind (one way)  to "selected" property , "selected" property will determine what value of the <select> tag will be
  //<option> will multipile by the supportedCurrencies array length and each option will have the value of current index ('EUR'/ 'GBP'/ 'USD')
  //*ngFor="let currency of supportedCurrencies": let -block scope variable currency- naming the index var (supportedCurrencies[i])
//{{currency}} - make the option text show in the view

})
export class CurrencySelectComponent {

  @Input() selected: string;

  supportedCurrencies: string[];

  constructor() {
    this.supportedCurrencies = ['EUR', 'GBP', 'USD'];
  }

}
