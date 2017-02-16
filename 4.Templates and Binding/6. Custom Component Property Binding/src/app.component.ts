import { Component } from '@angular/core';
import { ExchangeService } from './exchange.service';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [(ngModel)]="baseAmount">
    <currency-select [selected]="baseCurrency"></currency-select>
    = <strong>{{targetAmount}}</strong>
    <currency-select [selected]="targetCurrency"></currency-select>
  `//[selected] - we are affecting (one way binding) the 'selected' property by binding 'targetCurrency' to it
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
