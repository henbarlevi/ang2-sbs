// we have 4 ways of Data Binding:
// Interpolation {{}} - data from component sends to the DOM
// One Way Binding [] - data from component sends to the DOM
// Event Binding () - data from DOM sends to the component
// Two Way Binding [()] - data in hte component affect the DOM and the opposite

import { Component } from '@angular/core';

@Component({
  selector: 'currency-converter',
  template:`<input type="number" value="{{dollarValue}}"> USD = 
           <strong>{{shekelValue}}</strong> Shekel`,
              //can also:
              //bind-value="dollarValue" Or [value]="dollarValue" 
              
              //NOTICE - Properties VS attributes:
              //when we use Interpolation or one Way Binding like in the example above 
              //we are NOT assigning a value to the attribute 'value' html element
              //we are assigning value to the property 'value' of the DOM element and that cause the view to change (the html attribute only matter in the initial state)
              // input.attributes['value'] = undefiend , input.value = dollarValue
              
  //the way to css the component:
  styles:[
      `input[type=number]{ 
        color:blue;
      }`//affect all input elments from type number
  ]//(this style is isolated which means that it only affect this component and not affecting root or nested components)
})
export class AppComponent {
  dollarValue = 1;
  shekelValue = 4;
}
