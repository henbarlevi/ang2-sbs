//Versions (Top=newest, bottom=oldest)
//------------------------------------------------------------
//using ES6 Modules:
import { Component,Inject} from '@angular/core';//instead of :var Component = ng.core.Component; var Inject = ng.core.Inject;
import { QuoteService} from './quote.service.js'; //import the QuoteService - execute the code and import the exported QuoteService class 
 
  @Component({
    selector: 'random-quote',
    template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
  })
  export class RandomQuoteComponent { //exporting outside only the RandomQuoteComponent
    constructor( @Inject(QuoteService) quoteService) { //this is the way to the angular what service to inject using decorators
      quoteService.generateRandomQuotes(2000, (quote) => {
        this.quote = quote;
      });
    }
  }


// //-----------------------------------------------------
//   //using decorators:
// (function (app) {
//   var Component = ng.core.Component;
//   var QuoteService = app.QuoteService;
//   var Inject = ng.core.Inject;

//   @Component({
//     selector: 'random-quote',
//     template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
//   })
//   class RandomQuoteComponent {
//     constructor( @Inject(QuoteService) quoteService) { //this is the way to the angular what service to inject using decorators
//       quoteService.generateRandomQuotes(2000, (quote) => {
//         this.quote = quote;
//       });
//     }
//   }

//   app.RandomQuoteComponent = RandomQuoteComponent;
//   //--------------------------------------------------
//   //ES5:
//   // app.RandomQuoteComponent = Component({
//   //   selector: 'random-quote',
//   //   template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
//   // })
//   // .Class({
//   //   constructor: [QuoteService, function RandomQuoteComponent(quoteService) {
//   //     quoteService.generateRandomQuotes(2000, (quote) => {
//   //       this.quote = quote;
//   //     });
//   //   }]
//   // });

// })(window.app || (window.app = {}));
