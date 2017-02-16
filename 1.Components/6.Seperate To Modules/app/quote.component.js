(function(app) { //IIFE - immediately invoked function expression
//importing methods:
var Component = ng.core.Component;
var RandomQuoteService = app.RandomQuoteService; //importing RandomQuoteService
//quote Component that display quote using the RandomQuoteService:
app.QuoteComponent = Component({//adding QuoteComponent into the app global object
  selector:'some-quote',
  template:'<p>{{quote.line}}</p><p>{{quote.author}}</p>'
   //,providers: [RandomQuoteService] //if we declare the service in the computer level it will create new instance for each component
})
.Class({
constructor:[RandomQuoteService,function(randomQuoteService){ //injecting a service by declaring the Ctor as array, first getting the injections by name and passing it to the function Ctor arguments
  this.quote = randomQuoteService.getRandomQuote();
}]
});


})(window.app = window.app || {});