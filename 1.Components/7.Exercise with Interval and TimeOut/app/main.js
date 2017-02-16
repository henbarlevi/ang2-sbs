
// Write a simple Angular 2 application that displays the current time. 
//The time should update every second. 
// Follow the same practices introduced in our first example, 
//splitting the code into separate components and services, each one in its own file/module

(function() { //IIFE - immediately invoked function expression
//importing methods:
var Component = ng.core.Component;
var NgModule = ng.core.NgModule;
var BrowserModule =ng.platformBrowser.BrowserModule;
var platformBrowserDynamic =ng.platformBrowserDynamic.platformBrowserDynamic;
var Class = ng.core.Class; //create classes
//creating time service:
var TimeService = Class({
constructor: function TimeService(){},
getCurrentTime: function(){
 return new Date().toString();
},
generateCurrentTime:function(delay,callback){
  var self = this;
  callback(self.getCurrentTime());
  setInterval(function(){
    callback(self.getCurrentTime());
  },delay);
}
});
//creating time component:
var TimeComponent = Component({
  selector:'time-component',
  template:'<p [textContent]="time"></p>'
})
.Class({
  constructor:[TimeService,function TimeComponent(timeService){ 
    this.time ='13:00';
    var self = this;
      timeService.generateCurrentTime(2000,function(currentTime){
          self.time = currentTime;
      });
  }]
});
//creating app component:
var AppComponent = Component({
 selector:'my-app',
 template: '<p>The Current Time </p>' + '<time-component></time-component>'
}).Class({
  constructor:function AppComponent(){}
});
//creating app module:
var AppModule = NgModule({
  imports:[BrowserModule],
  declarations:[AppComponent,TimeComponent],
  providers:[TimeService],
  bootstrap:[AppComponent]
}).Class({
  constructor: function(){   
  }
});

  platformBrowserDynamic().bootstrapModule(AppModule);


})();