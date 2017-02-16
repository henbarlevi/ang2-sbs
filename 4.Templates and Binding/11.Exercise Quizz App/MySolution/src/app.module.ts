import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';

@NgModule({
  imports: [BrowserModule], //modules dependencies
  declarations: [AppComponent,QuestionComponent ],//components and pipes dependencies
  bootstrap: [AppComponent]
})
export class AppModule { }
