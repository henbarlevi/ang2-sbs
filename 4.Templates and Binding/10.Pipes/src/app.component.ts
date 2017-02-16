import { Component } from '@angular/core';
import { ExchangeService } from './exchange.service';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [(ngModel)]="baseAmount"
      [class.error]="isInvalid(baseAmount)">
    <currency-select [(selected)]="baseCurrency"></currency-select>
    = <strong>{{targetAmount | fixed:2}}</strong>
    <currency-select [(selected)]="targetCurrency"></currency-select>
    <p *ngIf="isInvalid(baseAmount)">Please enter a valid amount</p>
 
 <p>Built in pipes : </p>
 <p> {{Data.now() | date:'short'}} </p>
 <p>{{'the upper case pipe' | uppercase}}
 <p> {{{name:'Test'} | json}
  `,
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

  baseCurrency = 'USD';
  targetCurrency = 'GBP';
  baseAmount = 1;

  constructor(private exchangeService: ExchangeService) { }

  get targetAmount() {
    const exchangeRate = this.exchangeService
      .getExchangeRate(this.baseCurrency, this.targetCurrency);
    return this.baseAmount * exchangeRate;
  }

  isInvalid(value) {
    return !Number.isFinite(value);
  }
}
