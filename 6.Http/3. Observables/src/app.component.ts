import { Component } from '@angular/core';
import { Observable} from 'rxjs/Observable';
@Component({
  selector: 'my-app',
  template: `
    <p>Result: {{result}}
    <p>Time : {{time}}
  `
})
export class AppComponent {

  result;
  time;
  //difference between promises and Observables
  constructor() {

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
    //-----------------------------------
    //Using Observable:
//          const startTime = Date.now();
//       var observable = this.add(5,2);
//      // observable.toPromise().then(result=>{
//      //or
//         observable.subscribe(result=>{        
//         this.result = result;
//         this.time = Date.now()- startTime;
//       })
//     }
//     add(x, y):Observable<number> { //return Observable of type number
//       return Observable.create(observer=>{ //observer~resolve~callback
//       setTimeout(() => {observer.next(x + y);
//                        observer.complete();
//       }, 2000);
//       });
//     }
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
    //----------------------------------
    //chaining Observables:
//             const startTime = Date.now();
//       this.add(5,2)
//         .mergeMap(result=> this.add(result,3))
//         .mergeMap(result=> this.add(result,2))       
//         .subscribe(result=>{        
//         this.result = result;
//         this.time = Date.now()- startTime;
//       })
//     }
//     add(x, y):Observable<number> { //return Observable of type number
//       return Observable.create(observer=>{ //observer~resolve~callback
//       setTimeout(() => {observer.next(x + y);
//                        observer.complete();
//       }, 1000);
//       });
//     }
// }
    //---------------Promise with handling error
//     const startTime = Date.now();
//     this.add(5, 2)
//       .then(result => this.add(result, 3))
//       .then(result => '*'.repeat(result)) //- can also chain imiddiet functions
//       .then(result => {
//         this.result = result;
//         this.time = Date.now() - startTime;
//       }).catch(error=>console.log(error));
//       //we can do things after catching the error:
//       //.then(()=> this.time = Date.now()-startTime);
//   }
//   add(x, y): Promise<number> { //return promise of type number
//     return new Promise((resolve, reject) => { //resolve~callback
//       setTimeout(() => {
//         const result = x + y;
//         if(result>=0){
//         resolve(x + y)
//         }
//         else{
//           reject('invalid value' +result);
//         }
//       }, 2000);
//     });
//   }
// }
//-----------------------------------------------------
    //---------------Observables with handling error

//     const startTime = Date.now();
//     this.add(5, 2)
//       .mergeMap(result => this.add(result, -19)) //chainging Observables
//       .finally(()=> this.time = Date.now()-startTime)  //we can do things after catching the error (like finally in C#):
//       .subscribe(result => {
//         this.result = result;
//         this.time = Date.now() - startTime;
//       },error=>console.log(error)); //when catching error
// ;
//   }
//   add(x, y): Observable<number> { //return Observable of type number
//     return Observable.create(observer => { //observer~resolve~callback
//       setTimeout(() => {
//         const result = x + y;
//         if(result>=0){
//          observer.next(result);
//          observer.complete();
//         }
//         else{
//          observer.error('invalid value' +result);
//         }
//       }, 2000);
//     });
//   }
// }

//---------------Using observables getting multi responses-----------------
    const startTime = Date.now();
    this.CountDown(5)
      .subscribe(result => 
        this.result = result,
        null,//when catching error
        ()=>this.result='complete!' //when observer.complete()
      ); 
;
  }
  CountDown(start): Observable<number> { //return Observable of type number
    // return Observable.create(observer => { //observer~resolve~callback
    //   let counter = start;
    //   const intervalId =setInterval(() => {       
    //     if(counter>0){
    //      observer.next(counter--);  
    //     }
    //     else{
    //       observer.complete();
    //       clearInterval(intervalId); //clearing interval timer
    //     }
    //   }, 1000);
    // });

    //simpler implemintation:
    return Observable.timer(1,1000)
    .map(x=>start -x)
    .takeWhile(x=>x>0);
  }
}