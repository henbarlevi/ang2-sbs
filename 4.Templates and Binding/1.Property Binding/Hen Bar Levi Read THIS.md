
An Angular 2 web application that converts between different currencies. Used to demonstrate template features.
To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the TypeScript code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

we have 4 ways of Data Binding:
Interpolation {} - data from component sends to the DOM
One Way Binding [] - data from component sends to the DOM
Event Binding () - data from DOM sends to the component
Two Way Binding [()] - data in hte component affect the DOM and the opposite

  
 //NOTICE - Properties VS attributes:
 //when we use Interpolation or one Way Binding like in the example above 
 //we are NOT assigning a value to the attribute 'value' html element
 //we are assigning value to the property 'value' of the DOM element and that cause the view to change (the html attribute only matter in the initial state)
 // input.attributes['value'] = undefiend , input.value = dollarValue
              