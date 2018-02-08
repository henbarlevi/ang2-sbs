This project purpose is to explain the main concepts of the angular 2 framwork, and to always update the data to the latest angular version (currently ang 5.0). <br>
this Doc is a Cheat Sheet for the main concepts + advance concepts
#### ===========================================
## DEBBUGING TOOLS
#### ===========================================

### 1. You can Debug using the Chrom Developer Tools by Pressing F12
 >  - ### in there , in the up right corner you will have the <b>'sources'</b> section where you can enter to your source code - Press on it
 >  - ### the original typescript will be inside 'webpack > '.' folder OR 'path to your project' folder :<br> there you can choose where to put a break point
 >  - ### <b>F8</b> = Pause script execution (if currently running) or resume (if currently paused) <br> <b>F10</b> = Step over next function call <br> <b>F11</b> = Step into next function call <br> full info [here](https://developers.google.com/web/tools/chrome-devtools/shortcuts)
### 2. use [Augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd?hl=en) Chrom Extension
> - ### it provide more comfortable debugging tool to chrome for angular apps

#### ===========================================
# Topics
#### ===========================================
## 1. [Basics](#asd)
> - #### Binding - property binding, event binding, Two way Binding Etc..
> - #### Styling - styling a component, class and style binding
> - #### Directives - ngIf, else ,ngFor , 
> - #### Pipes - ngIf, class and style binding

## 2. [Forms]
> - #### FormsModule - Creating Form , ngValid
> - #### Pipes - ngIf, class and style binding

## 3. [Http](#Http)
> -  #### [[old] Http](#httpold) ()
> - #### [[new] HttpClient](#HttpClient) (from @angular/common/http ng version 4+)
## 4. [Routing]
## 5. [Advanced]
## 6. [Testing]




> ##   Basics 
> # Http <a name="http"></a>

> ## Http (old)  <a name="httpold"></a>
- ###   Steps Before use:
1. install the package @angular/http (cli install it automatically)
2. import HttpModule from '@angular/http' in the app.module
3. dont forget to use @Injectible in order to inject the Http Service

> ### Exmaple (GET)
``` ts
import { Http} from '@angular/http';
import {Injectable} from '@angular/core';



  @Injectable() //in order to inject http service - no need to do this when using @Component because @Component already implement the injection
export class someService { //make http request to get the quote in the 
  constructor(private http:Http){ }

  //GET HTTP REQUEST - get projects by name
  getProjectsByDomain(domain) : Promise<any>{
    //setting domain as a queryString parameter:
    let params: URLSearchParams = new URLSearchParams();
    params.set('domain', domain);
    return this.http.get(`${this.baseUrl}/project`, { search: params })
      .toPromise()
      .then((response:Response )=> response.json())
      .catch(this.errorHandler);
  }
  //POST HTTP REQUEST -add new project  
  addProject(project) : Promise<any> {
    const json = JSON.stringify(project); //convert project to json
    console.log(json);//DEBUG
    const headers = new Headers({ 'content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/project`, json, { headers: headers }).toPromise()
      .catch(this.errorHandler);
  }
  //DELTE HTTP REQUEST - delete existing project
  deleteProject(project)  : Promise<any> {
    return this.http.delete(`${this.baseUrl}/project/${project._id}`)
      .toPromise()
      .catch(this.errorHandler);
  }
}

```

> ## HttpClient <a name="HttpClient"></a> (full description [here](https://angular.io/guide/http))
- ###   Replace Http with the New HttpClient :
1. replace HttpModule in the app.module.ts with HttpClientModule from '@angular/common/http'
2. in the service inject the HttpClient instead of Http

* ### Exmaple (GET)

```ts
import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';



  @Injectable() //in order to inject http service - no need to do this when using @Component because @Component already implement the injection
export class someService { //make http request to get the quote in the 
  constructor(private httpClient:HttpClient){ }
  getProjectsByDomain(domain) : Promise<any>{
    let params: URLSearchParams = new URLSearchParams();
    params.set('domain', domain);
    return this.httpClient.get<iProject[]>(`${this.baseUrl}/project`, { search: params })
      .toPromise()
    //   .then(response => response.json()) - no need - HttpClient will extract the body of the response automatically by default
    
      .catch(this.errorHandler);
  }
}
```
- HttpClient will extract the body of the response automatically by default we can overwrite this behaviour by sending in options object the following
<b>
> 1. observe:'response' (ex) - will not extract the body
> 2. responseType:'text' (ex) - will treat the body content as text

</b>

```ts
    return this.httpClient.get(`${this.baseUrl}/project`, 
    { search: params 
      observe:'response' // 'body' by default
      responseType:'text'/'blob'/'arrayBuffer' //'json' by default ,blob -if wanting to download a file
})
```
- you can also <b> listen to the http events </b> - 'SENT' (when request is sent)/'RESPONSE' (when response received)/'DownlaodProgress' (if downloading a file) and more.
```ts
    return this.httpClient.get(`${this.baseUrl}/project`, 
    { search: params 
      observe:'events' //listen to the http events
    })
```
- <b>Set Headers</b> :
```ts
const headers = new HttpHeaders().set('Authorization','Bearer asdasd');
    return this.httpClient.get(`${this.baseUrl}/project`, 
    { search: params 
      observe:'body',
      headers:headers
    })
```
- <b>set Query String Params</b> :
Note you can also just concat it in a string, this is alternative
```ts
const queryStrings = new HttpParmas().set('auth','somevalue');
    return this.httpClient.get(`${this.baseUrl}/project`, 
    { search: params 
      observe:'body',
      params:queryStrings
    })
```
- <b>send request with HttpRequest</b> :
<br>this is useful for example when you want to show a progress bar of downloading files
```ts
const queryStrings = new HttpParmas().set('auth','somevalue');
const req  = new HttpRequest('PUT '/*(request method)*/,'url'/*request url*/,
{reportProgress:true, params:queryStrings}/*options*/)
  return this.httpClient.request(req) //returns an observable 
```
- ### <b>Interceptors</b> :
<br>Intercept the http process, for example - add to all requests an authentication Header
> 1. create file for the interceptor - for ex  auth.interceptor.ts
> 2. implement the HttpInterceptor interface
```ts
import { HttpInterceptor,HttpRequest,HttpEvebt} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

export class AuthInterceptor implements HttpInterceptor{
    construactor(private AuthService:AuthService){}
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        //request are immutable (cant edit them), so we need to clone them
        const copiedReq = req.clone({
            //modifications to the cloned request:
            headers:req.headers.append('Authorization',this.AuthService.getToken());//set the headers from the original req +authorization header 
        }); 
        return next.handle(copiedReq);//pass request to the next handling process
    }
}
```
>3. in order to tell angular to use this interceptor, import it in the app.module /core.module
```ts
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthInterceptor} from './somefolder/auth.interceptor';

@NgModule({
    ...
    providers:[
        {provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor
        multi:true //tell angualr you can add more interceptors
        }
        //you can add more interceptors:
        /*
           {provide:HTTP_INTERCEPTORS,
        useClass:someotherInterceptor
        multi:true //tell angualr you can add more interceptors
        }
        NOTE - order matter - the req will pass through the interceptors in that roder
        */
    ]
    ...
})
```
- <b> you can also intercept responses :</b>
```ts
import { HttpInterceptor,HttpRequest,HttpEvebt} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/opertaor/do';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    construactor(private AuthService:AuthService){}
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        return next.handle(req).do((event: HttpEvent<any>) =>{
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
            }
        }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
            // redirect to the login route
            // or show a modal
            }
        }
        });
    }
}
```