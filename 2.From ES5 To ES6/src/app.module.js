//Versions (Top = newest, bottom=oldest)

//using ES6 Modules---------------------------------------
//import Modules:
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { QuoteService} from './quote.service.js';
import{RandomQuoteComponent} from './random-quote.component.js';
import { AppComponent} from './app.component.js';
//create the app module:
@NgModule({
   imports: [BrowserModule],
    declarations: [AppComponent, RandomQuoteComponent],
    providers: [QuoteService],
    bootstrap: [AppComponent]
})
export class AppModule{}
// //using decorators:------------------------------------
// (function(app) {
//   var NgModule = ng.core.NgModule;
//   var BrowserModule = ng.platformBrowser.BrowserModule;
//   var QuoteService = app.QuoteService;
//   var RandomQuoteComponent = app.RandomQuoteComponent;
//   var AppComponent = app.AppComponent;

// @NgModule({
//    imports: [BrowserModule],
//     declarations: [AppComponent, RandomQuoteComponent],
//     providers: [QuoteService],
//     bootstrap: [AppComponent]
// })
// class AppModule{}

// app.AppModule = AppModule;
// //ES5:----------------------------------------------------
//   // app.AppModule = NgModule({
//   //   imports: [BrowserModule],
//   //   declarations: [AppComponent, RandomQuoteComponent],
//   //   providers: [QuoteService],
//   //   bootstrap: [AppComponent]
//   // })
//   // .Class({
//   //   constructor: function() { }
//   // });

// })(window.app || (window.app = {}));
