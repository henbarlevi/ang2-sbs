(function(app) { //IIFE - immediately invoked function expression
//importing methods:
var NgModule = ng.core.NgModule;
var BrowserModule =ng.platformBrowser.BrowserModule;
//importing modules:
var RandomQuoteService = app.RandomQuoteService; //importing RandomQuoteService 
var QuoteComponent = app.QuoteComponent;//quote Component that display quote using the RandomQuoteService 
var AppComponent = app.AppComponent;
  //create the app module:
  app.AppModule = NgModule({
    imports: [BrowserModule], //importing other modules, every angular2 app that runs in the browser need to import the BrowserModule
    declarations: [AppComponent,QuoteComponent],//list of all the components used in the app
    providers:[RandomQuoteService],//list of all services dependencies (all services in the appModule are singleton)
    bootstrap: [AppComponent] //which component need to be boostraped (css design)
  })
  .Class({ 
    constructor: function() { }
  });



})(window.app ||(window.app = {}));