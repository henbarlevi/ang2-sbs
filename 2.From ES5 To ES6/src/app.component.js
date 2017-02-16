//Versions - top - newest  bottom - oldest
//using ES6 Modules:///////////////////////////////TODO -KEEEP GOING
//import modules:
import { Component } from '@angular/core';
//create app Component:
@Component({
    selector: 'my-app',
    template: `
      <h1>Random Quote</h1>
      <random-quote></random-quote>
      `
})
export class AppComponent{} //exposing the AppComponent to outside this module

//////---------------------------------------
// //using decorators:
// (function(app) {
//   var Component = ng.core.Component;
// //using decorators:
// @Component({
//    selector: 'my-app',
//     template:`
//       <h1>Random Quote</h1>
//       <random-quote></random-quote>
//       `
// })
// class AppComponent{} 

// app.AppComponent = AppComponent;
//////---------------------------------------
// //ES6:
// // class AppComponent{ }
// //  app.AppComponent = Component({
// //     selector: 'my-app',
// //     template:`
// //       <h1>Random Quote</h1>
// //       <random-quote></random-quote>
// //       `
// //   })(AppComponent);
//////---------------------------------------  
// //ES5:
//   // app.AppComponent = Component({
//   //   selector: 'my-app',
//   //   template:`
//   //     <h1>Random Quote</h1>
//   //     <random-quote></random-quote>
//   //     `
//   // })
//   // .Class({
//   //   constructor: function AppComponent() { }
//   // });

// })(window.app || (window.app = {}));
