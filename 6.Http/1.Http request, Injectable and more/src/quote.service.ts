import { Quote } from './quote.model';
import { Http} from '@angular/http';
import {Injectable} from '@angular/core';



  @Injectable() //in order to inject http service - no need to do this when using @Component because @Component already implement the injection
export class QuoteService { //make http request to get the quote in the quote.json file (localhost:8080/quote.json) 
  
  constructor(private http:Http){ }
  getQuoteOfTheDay(): Promise<Quote> { //will return a quote not imidetlly (async)
   return this.http.get('/quote.json').toPromise() //'Get Request to 'localhost:8080/quote.json'
    .then(response=> response.json());
    //this.http.get() - return an observable
    //this.http.get('/quote.json').toPromise() - convert the observable to a promise
   
    //promise - using when excpecting single results
    //observable - using when excpecting multi results - more powerful but more complex

   //hard coded response
    // return {
    //   "line": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    //   "author": "Brian W. Kernighan"
    // };
  }

}
 