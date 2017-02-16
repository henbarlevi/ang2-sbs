import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// using the Fixer.io API 
// Read the Usage section of the Fixer.io documentation to understand how that API works. For example,
// you can retrieve the latest exchange rates from USD to EUR and GBP by making a GET request with url http://api.fixer.io/latest?base=USD&symbols=EUR,GBP 
@Injectable()
export class ExchangeService {

  constructor(private http : Http){ 
       this.http.get('http://api.fixer.io/latest?base=USD&symbols=EUR,GBP').toPromise()
    .then(result=> console.log(result));
  } //injecting the http service

 supportedCurrencies = ['EUR', 'GBP', 'USD'];

  getExchangeRate(baseCurrency: string, targetCurrency: string) {
        console.log('ExchangeService called');
    if (baseCurrency === targetCurrency) {
      return 1;
    }
    // this.http.get('http://api.fixer.io/latest?base=USD&symbols=EUR,GBP').toPromise()
    // .then(result=> console.log(result));
    return 1;
  }
}
