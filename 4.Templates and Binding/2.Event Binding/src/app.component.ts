// we have 4 ways of Data Binding:
// Interpolation {} - data from component sends to the DOM
// One Way Binding [] - data from component sends to the DOM
// Event Binding () - data from DOM sends to the component
// Two Way Binding [()] - data in hte component affect the DOM and the opposite

import { Component } from '@angular/core';
//event Binding with local variables:---------------------------------
// @Component({
//   selector: 'currency-converter',
//   template: `<input type="number" value={{dollarValue}} #dollarValueField> USD = 
//            <strong>{{shekelValue}}</strong> Shekel
//            <button (click)="update(dollarValueField)">Update</button>
//            `,//can also: on-click ="update()"
//   //#dollarValueField - create a var visible only in inside the template code
//   //dollarValueField = the input element   
//   //the way to css the component:
//   styles: [
//     `input[type=number]{ 
//         color:blue;
//       }`//affect all input elments from type number
//   ]//(this style is isolated which means that it only affect this component and not affecting root or nested components)
// })
// export class AppComponent {
//   dollarValue = 1; //default val
//   shekelValue = 4; //default val
//   exchangeRate = 4;
//   update(dollarValueField): void {
//     console.log(dollarValueField); //dollarValueField = the input element
//     console.log(dollarValueField.value + ' is of type ' + typeof dollarValueField.value);
//     console.log('the propety dollarValue :' +this.dollarValue) //notice that if we change the value in the input it doesnt change dollarValue cause its not 2 way Binding
//     this.shekelValue = dollarValueField.value * this.exchangeRate;
//   }
//event Binding with input event and passing the $event:---------------------------------
@Component({
  selector: 'currency-converter',
  template: `<input type="number" value={{dollarValue}} (input)="update($event)" /> USD = 
           <strong>{{shekelValue}}</strong> Shekel
           `//(input) - supported by input and Textarea element and raise each time the input changed
})
export class AppComponent {
  dollarValue = 1; //default val
  shekelValue = 4; //default val
  exchangeRate = 4;
  update(event): void {
    console.log(event); //the $event object
    console.log(event.target);//the input element
    console.log('the propety dollarValue :' +this.dollarValue) //notice that if we change the value in the input it doesnt change dollarValue cause its not 2 way Binding
    this.shekelValue = event.target.value * this.exchangeRate;
  }
}
