



import { Component } from '@angular/core';
import { ExchangeService } from './exchange.service';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [(ngModel)]="baseAmount"> {{baseCurrency}}
    = <strong>{{targetAmount}}</strong> {{targetCurrency}}
  `,//[(ngModel)] - using two way binding on baseAmount
})
export class AppComponent {

  baseCurrency = 'USD';
  targetCurrency = 'GBP';
  baseAmount = 1;
//injecting service to Component using TypeScript Syntax:
  constructor(private exchangeService: ExchangeService) { } //injecting ExchangeService to Ctor - the angular know which service to inject by telling it in the app.module -providers:
  // by adding 'private' word it will create field of exchangeService (this.exchangeService)

  get targetAmount() {
    const exchangeRate = this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency);
    return this.baseAmount * exchangeRate;
  }

}
