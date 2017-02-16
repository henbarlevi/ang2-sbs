(function() { //IIFE - immediately invoked function expression
  //Creating component:
  var AppComponent = ng.core.Component({ //to create a Component we use the ng.core.Component method
    selector: 'my-app', //the name of the html tag
    template: '<h1>Hello World!</h1>' //the diplay of the component
  })
  .Class({
    constructor: function() { }
  });
  //create the app module:
  var AppModule = ng.core.NgModule({
    imports: [ng.platformBrowser.BrowserModule], //importing other modules, every angular2 app that runs in the browser need to import the BrowserModule
    declarations: [AppComponent],//list of all the components used in the app
    bootstrap: [AppComponent] //which component need to be boostraped 
  })
  .Class({
    constructor: function() { }
  });
  //boostarping the app module - bootstrap? - which module it going to start with
  ng.platformBrowserDynamic.platformBrowserDynamic()
    .bootstrapModule(AppModule);

})();
