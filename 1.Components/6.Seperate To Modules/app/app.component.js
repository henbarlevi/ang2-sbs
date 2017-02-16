(function(app) { //IIFE - immediately invoked function expression
//importing methods:
var Component = ng.core.Component;
//Creating App component:
  app.AppComponent = Component({ //to create a Component we use the ng.core.Component method
    selector: 'my-app', //the name of the html tag
    template: '<h1>Random quote:</h1>' + '<some-quote></some-quote>' //nested quote component
    
 })
  .Class({     
    constructor: function() { 
    }
  });

})(window.app ||(window.app = {}));