//Custom Nested Component Two Way Binding:


//EventEmitter - raise events, property can be from type EventEmitter in order to raise event when it change
//Input - make the property available to get affected from the outside environment (one way bind)
//Output - make the property available to affected the outside environment (event bind)
import { Component, EventEmitter, Input, Output } from '@angular/core';
//currency-select - Component that present drop down list, the list options are determine by the
//supportedCurrencies array that contain the values -['EUR', 'GBP', 'USD']
//selected - Component property the present the value chosen from the dropdown list
//[ngModel]="selected" - make the dropdown list chosenValue be the selected property value 
// the ngModel [] not enough to affect the 'selected' property, it need to be declared as an Input
//in order to be affected from outside so we imported Input Component and declared:
// @Input() selected: string ;
//( bind to the selected from outside the Component : <currency-select [selected]="someOutsideVar"></currency-select>)

//Version 1 - Two Way Binding with Nested Component:

// @Component({
//   selector: 'currency-select', 
//   template: `
//     <select [ngModel]="selected" (ngModelChange)="RaisePropertyChanged($event)">
//       <option *ngFor="let currency of supportedCurrencies" [value]="currency">
//         {{currency}}
//       </option>
//     </select>
//   `
// })
// export class CurrencySelectComponent {

//   @Input() selected: string ;
//   @Output() propertyChanged = new EventEmitter<string>();

//   supportedCurrencies: string[];

//   constructor() {
//     this.supportedCurrencies = ['EUR', 'GBP', 'USD'];
//   }

//   RaisePropertyChanged(selected: string) {
//     this.selected = selected;
//     this.propertyChanged.emit(selected);
//   }
// }

@Component({
  selector: 'currency-select',
  template: `
    <select [ngModel]="selected" (ngModelChange)="onSelectedChange($event)">
      <option *ngFor="let currency of supportedCurrencies" [value]="currency">
        {{currency}} 
      </option>
    </select>
  `
})
export class CurrencySelectComponent {

  @Input() selected: string ;
  @Output() selectedChange = new EventEmitter<string>();

  supportedCurrencies: string[];

  constructor() {
    this.supportedCurrencies = ['EUR', 'GBP', 'USD'];
  }

  onSelectedChange(selected: string) {
    this.selected = selected;
    this.selectedChange.emit(selected);
  }
}