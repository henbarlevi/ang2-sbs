import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <p>Result: {{result}}</p>
    <p>Time : {{time}}</p>
  `
})
export class AppComponent {

  result;
  time;
  //difference between callbacks and promises
  constructor() {
    //simple callback example -sending to the add method 2 numbers and a callback to execute when finished:
    //   const startTime = Date.now();
    //   this.add(5, 3, result => {
    //     this.result = result
    //     this.time = Date.now() - startTime;
    //   });
    // }
    // add(x, y, callback) {
    //   setTimeout(() => callback(x + y), 2000);
    // }
    //-----------------------------------
    //chaining callbacks one after another:
    //   const startTime = Date.now();
    //   this.add(5, 3, result => {

    //     this.add(result, 3, result => {
    //       this.result = result
    //       this.time = Date.now() - startTime;
    //     });

    //   });
    // }
    // add(x, y, callback) {
    //   setTimeout(() => callback(x + y), 2000);
    // }
    //-----------------------------------------
    //Using promises:

    //   const startTime = Date.now();
    //   var promise = this.add(5,2);
    //   promise.then(result=>{
    //     this.result = result;
    //     this.time = Date.now()- startTime;
    //   })
    // }
    // add(x, y):Promise<number> { //return promise of type number
    //   return new Promise(resolve=>{ //resolve~callback
    //   setTimeout(() => resolve(x + y), 2000);
    //   });
    // }
    //----------------------------------
    //chaining promises: 
    // add 5+2 then when you get the result add 3 to that then when you get the result update the props
    //  const startTime = Date.now();
    //  this.add(5,2)
    //   .then(result=>this.add(result,3))
    //   .then(result=>'*'.repeat(result)) //- can also chain imiddiet functions
    //   .then(result=>{
    //     this.result = result;
    //     this.time = Date.now()- startTime;
    //   })
    // }
    // add(x, y):Promise<number> { //return promise of type number
    //   return new Promise(resolve=>{ //resolve~callback
    //   setTimeout(() => resolve(x + y), 2000);
    //   });
    // }
    //---------------with handling error
    const startTime = Date.now();
    this.add(5, 2)
      .then(result => this.add(result, 3))
      .then(result => '*'.repeat(result)) //- can also chain imiddiet functions
      .then(result => {
        this.result = result;
        this.time = Date.now() - startTime;
      }).catch(error=>console.log(error));
      //we can do things after catching the error:
      //.then(()=> this.time = Date.now()-startTime);
  }
  add(x, y): Promise<number> { //return promise of type number
    return new Promise((resolve, reject) => { //resolve~callback
      setTimeout(() => {
        const result = x + y;
        if(result>=0){
        resolve(x + y)
        }
        else{
          reject('invalid value' +result);
        }
      }, 2000);
    });
  }
}
