import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; //http module
import { BookmarkService } from './bookmark.service';//BookmarkService
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],//modules dependencies
  declarations: [AppComponent],//component dependencies
  providers: [BookmarkService],//service dependencies
  bootstrap: [AppComponent]
})
export class AppModule { }
