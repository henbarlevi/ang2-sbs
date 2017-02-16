import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
@NgModule({
  imports: [BrowserModule,HttpModule], //HttpModule - import not only http service but all other service that http service need
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
