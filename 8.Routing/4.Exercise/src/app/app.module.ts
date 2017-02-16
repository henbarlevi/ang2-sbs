import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'; //import LocationStrategy
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing'; //my routing module
import { AppComponent } from './app.component';
//artist:
import { ArtistService } from './artist/artist.service';
import { ArtistListComponent } from './artist/artist-list.component';
import { ArtistDetailComponent } from './artist/artist-detail.component';
//album:
import { AlbumService} from './album/album.service';
import { AlbumListComponent} from './album/album-list.component';
import { AlbumDetailComponent} from './album/album-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule, routing], //import routing
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    AlbumListComponent,
    AlbumDetailComponent
  ],
  providers: [
    ArtistService,
    AlbumService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
