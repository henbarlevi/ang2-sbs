(function() { //IIFE - immediately invoked function expression
//importing methods:
var Component = ng.core.Component; //create components
var NgModule = ng.core.NgModule;//Create modules
var BrowserModule =ng.platformBrowser.BrowserModule; //BrowserModule
var platformBrowserDynamic =ng.platformBrowserDynamic.platformBrowserDynamic;
//creating random component:
var SmallComponent = Component({
  selector:'small-component',
  template:'<p>this is a small component</p>'
}).Class({
  constructor:function(){}
});
  //Creating App component:
  var AppComponent = Component({ //to create a Component we use the ng.core.Component method
    selector: 'my-app', //the name of the html tag
    template: '<h1>Hello World!</h1>' +'<small-component></small-component>' ,//nested component
  })
  .Class({
    constructor: function() { }
  });

  //create the app module:
  var AppModule = NgModule({
    imports: [BrowserModule], //importing other modules, every angular2 app that runs in the browser need to import the BrowserModule
    declarations: [AppComponent,SmallComponent],//list of all the components used in the app
    bootstrap: [AppComponent] //which component need it gonna start with (which one is the root)
  })
  .Class({
    constructor: function() { }
  });

  platformBrowserDynamic().bootstrapModule(AppModule);

})();
