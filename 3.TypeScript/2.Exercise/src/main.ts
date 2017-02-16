
// Write a simple Angular 2 application that displays the current time. 
//The time should update every second. 
// Follow the same practices introduced in our first example, 
//splitting the code into separate components and services, each one in its own file/module


//importing modules:
import { Component,Class} from '@angular/core';
import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic'
//creating time service:
class TimeService{
private getCurrentTime() :string{
 return new Date().toString();
}
generateCurrentTime(delay:number,callback:(currentTime:string)=>void){
  var self = this;
  callback(self.getCurrentTime());
  setInterval(function(){
    callback(self.getCurrentTime());
  },delay);
}
}
//creating time component:
@Component({
  selector:'time-component',
  template:'<p [textContent]="time"></p>'
})
class TimeComponent{
private time:string = '13:00';
  constructor(timeService:TimeService){    
    let self = this;
      timeService.generateCurrentTime(2000,function(currentTime){
          self.time = currentTime;
      });
  }
  
}
//creating app component:
@Component({
 selector:'my-app',
 template: '<p>The Current Time </p>' + '<time-component></time-component>'
})
class AppComponent{}
//creating app module:
@NgModule({
  imports:[BrowserModule],
  declarations:[AppComponent,TimeComponent],
  providers:[TimeService],
  bootstrap:[AppComponent]
})
class AppModule{}

  platformBrowserDynamic().bootstrapModule(AppModule);


