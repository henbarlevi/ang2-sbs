import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AppComponent } from './app.component';
import { ExchangeService } from './exchange.service';
import { CurrencySelectComponent } from './currency-select.component';
import { FixedPipe } from './fixed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrencySelectComponent,
    FixedPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
