import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'; //We using the HashLocationStrategy for routing
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing'; //import our routing module
import { AppComponent } from './app.component';
import { ArtistService } from './artist/artist.service';
import { ArtistListComponent } from './artist/artist-list.component';
import { ArtistDetailComponent } from './artist/artist-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistDetailComponent
  ],
  providers: [
    ArtistService,
    {provide: LocationStrategy, useClass: HashLocationStrategy} //routing strategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
