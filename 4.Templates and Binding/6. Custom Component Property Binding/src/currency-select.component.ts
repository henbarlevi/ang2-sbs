import { Component, Input } from '@angular/core';

@Component({
  selector: 'currency-select',
 // inputs:['selected'], - can also do this instead of @input in the class
  template: `
    <select>
      <option>{{selected}}</option>
    </select>
  `
})
export class CurrencySelectComponent {

  @Input() selected: string;
   //@input - which means 'selected' can bind to value (one way bind) from outside (nested component) by 
   //assigning to this component (currency-select) a custom attribute: selected (<currency-select [selected]="someOutsideVar">)

}
