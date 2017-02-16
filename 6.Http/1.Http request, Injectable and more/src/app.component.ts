import { Component } from '@angular/core';
import { Quote } from './quote.model';
import { QuoteService } from './quote.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Quote Of The Day</h1>
    <p><em>{{quote?.line}}</em> - {{quote?.author}}</p>
  `//to prevent an undefiend exception with quote (until getting value from the http request)
})//we did quote?.line - if quote is defiend show its line prop
export class AppComponent {

  quote: Quote;

  constructor(quoteService: QuoteService) {
    quoteService.getQuoteOfTheDay().then(quote => this.quote = quote);
//this.quot will get the quot from the response async.  
}

}
