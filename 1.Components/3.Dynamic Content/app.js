(function() { //IIFE - immediately invoked function expression
//importing methods:
var Component = ng.core.Component;
var NgModule = ng.core.NgModule;
var BrowserModule =ng.platformBrowser.BrowserModule;
var platformBrowserDynamic =ng.platformBrowserDynamic.platformBrowserDynamic;
  //Creating App component:
  var AppComponent = Component({ //to create a Component we use the ng.core.Component method
    selector: 'my-app', //the name of the html tag
    template: '<h1>{{h1Content}}</h1>'
  })
  .Class({    
    constructor: function() { 
      this.h1Content = 'this is Dynamic content';
    }
  });

  //create the app module:
  var AppModule = NgModule({
    imports: [BrowserModule], //importing other modules, every angular2 app that runs in the browser need to import the BrowserModule
    declarations: [AppComponent],//list of all the components used in the app
    bootstrap: [AppComponent] //which component need to start with
  })
  .Class({
    
    constructor: function() { }
  });

  platformBrowserDynamic().bootstrapModule(AppModule);

})();
