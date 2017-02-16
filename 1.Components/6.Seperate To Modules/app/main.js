(function(app) { //IIFE - immediately invoked function expression
//importing methods:
var platformBrowserDynamic =ng.platformBrowserDynamic.platformBrowserDynamic;
//importing modules:
var AppModule = app.AppModule;

  platformBrowserDynamic().bootstrapModule(AppModule);


})(window.app ||(window.app = {}));