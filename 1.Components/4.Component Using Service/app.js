//if u wont to see component using service in --ES6-- there is example in 4.Templates and binding/5.Component using Service

(function() { //IIFE - immediately invoked function expression
//importing methods:
var Component = ng.core.Component;
var NgModule = ng.core.NgModule;
var BrowserModule =ng.platformBrowser.BrowserModule;
var platformBrowserDynamic =ng.platformBrowserDynamic.platformBrowserDynamic;
var Class = ng.core.Class; //create classes
//service that pick and return random quote:
var RandomQuoteService = Class({
constructor:function(){},
getRandomQuote: function(){
  var randomIndex = Math.floor(Math.random()*quoteSamples.length);
   return quoteSamples[randomIndex];
}
});
//quote Component that display quote using the RandomQuoteService:
var QuoteComponent = Component({
  selector:'some-quote',
  template:'<p>{{quote.line}}</p><p>{{quote.author}}</p>'
   //,providers: [RandomQuoteService] //if we declare the service in the computer level it will create new instance for each component
})
.Class({
constructor:[RandomQuoteService,function(randomQuoteService){ //injecting a service by declaring the Ctor as array, first getting the injections by name and passing it to the function Ctor arguments
  this.quote = randomQuoteService.getRandomQuote();
}]
});
  //Creating App component:
  var AppComponent = Component({ //to create a Component we use the ng.core.Component method
    selector: 'my-app', //the name of the html tag
    template: '<h1>Random quote:</h1>' + '<some-quote></some-quote>' //nested quote component
    
 })
  .Class({     
    constructor: function() { 
    }
  });

  //create the app module:
  var AppModule = NgModule({
    imports: [BrowserModule], //importing other modules, every angular2 app that runs in the browser need to import the BrowserModule
    declarations: [AppComponent,QuoteComponent],//list of all the components used in the app
    providers:[RandomQuoteService],//list of all services dependencies (all services in the appModule are singleton)
    bootstrap: [AppComponent] //which component need to start with
  })
  .Class({ 
    constructor: function() { }
  });

  platformBrowserDynamic().bootstrapModule(AppModule);

//array of quotes:
var quoteSamples = [
    {
      "line": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "author": "Brian W. Kernighan"
    },
    {
      "line": "Walking on water and developing software from a specification are easy if both are frozen.",
      "author": "Edward V Berard"
    },
    {
      "line": "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
      "author": "Hofstadter's Law"
    },
    {
      "line": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      "author": "Rick Osborne"
    },
    {
      "line": "In theory, there is no difference between theory and practice. But, in practice, there is.",
      "author": "Jan L. A. van de Snepscheut"
    },
    {
      "line": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
      "author": "Bill Gates"
    },
    {
      "line": "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.",
      "author": "Leon Bambrick"
    },
    {
      "line": "Nine people can't make a baby in a month.",
      "author": "Fred Brooks"
    },
    {
      "line": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
      "author": "Edsger Dijkstra"
    },
    {
      "line": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
      "author": "Tom Cargill"
    }
  ];
})();