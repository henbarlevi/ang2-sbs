In the previous section we wrote a simple Currency Converter application. However we hard-coded all the exchange rates in our ExchangeService class. 
Modify the application so that it fetches the latest exchange rates using the Fixer.io API instead. 
Read the Usage section of the Fixer.io documentation to understand how that API works. For example,
you can retrieve the latest exchange rates from USD to EUR and GBP by making a GET request with url http://api.fixer.io/latest?base=USD&symbols=EUR,GBP 
It will return a JSON object like the following: 
{ 
  base: "USD", 
  date: "2016-05-13", 
  rates: { 
    GBP: 0.69403, 
    EUR: 0.88121 
  } 
} 
To keep things simple, you can load all the exchange rates for the supported currencies when the application loads, in the ExchangeService constructor. This way you should be able to leave most of the existing code as it is. You do need to make sure to inject the Http service into the ExchangeService of course.  
You can find a possible solution as the currency-converter- solution.zip downloadable file