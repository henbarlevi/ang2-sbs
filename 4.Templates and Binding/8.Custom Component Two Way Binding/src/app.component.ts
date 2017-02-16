import { Component } from '@angular/core';
import { ExchangeService } from './exchange.service';

 //Version 1 - Two Way Binding with Nested Component :
// @Component({
//   selector: 'currency-converter',
//   template: 
//   `
//     <input type="number" [(ngModel)]="baseAmount">
//     <currency-select [selected]="baseCurrency" (propertyChanged)="baseCurrency = $event"></currency-select>
//     = <strong>{{targetAmount}}</strong>
//     <currency-select [selected]="targetCurrency" (propertyChanged)="targetCurrency = $event"></currency-select>
//   `
// })
// export class AppComponent {

//   baseCurrency = 'USD';
//   targetCurrency = 'GBP';
//   baseAmount = 1;

//   constructor(private exchangeService: ExchangeService) { }

//   get targetAmount() {
//     const exchangeRate = this.exchangeService
//       .getExchangeRate(this.baseCurrency, this.targetCurrency);
//     return this.baseAmount * exchangeRate;
//   }
// }
//NOTICE - we can use Naming Convention to make the syntax shorter : proprety name = name  and EventEmitter name = propretyName+'Change'

  //Version 2 - Shorter syntax with Naming Convention (along with version 2 in currency-select.component.ts)
@Component({
  selector: 'currency-converter',
  template: 


`
    <input type="number" [(ngModel)]="baseAmount">
    <currency-select [(selected)]="baseCurrency"></currency-select>
    = <strong>{{targetAmount}}</strong>
    <currency-select [(selected)]="targetCurrency"></currency-select>
  `
})
export class AppComponent {

  baseCurrency = 'USD';
  targetCurrency = 'GBP';
  baseAmount = 1;

  constructor(private exchangeService: ExchangeService) { }

  get targetAmount() {
    const exchangeRate = this.exchangeService
      .getExchangeRate(this.baseCurrency, this.targetCurrency);
    return this.baseAmount * exchangeRate;
  }
}