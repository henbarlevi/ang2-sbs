import { Component, Inject } from '@angular/core';
import { QuoteService } from './quote.service';
import { IQuote} from './quote.model';
@Component({
  selector: 'random-quote',
  template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
})
export class RandomQuoteComponent {
  quote : IQuote; //TypeScript field of class declaration (=this.quote)
  //inject service with TypeScript syntax:
  constructor(quoteService:QuoteService) {//quoteService is from type 'QuoteService'
    quoteService.generateRandomQuotes(2000, quote => this.quote = quote);
  }
  //instead of:
  // constructor(@Inject(QuoteService) quoteService) {
  //   quoteService.generateRandomQuotes(2000, quote => this.quote = quote);
  // }

}
