import { Component } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist-detail',
  template: require('./artist-detail.component.html')
})
export class ArtistDetailComponent {

  artist;
  artistId = '630662ea-1c7d-4208-99fd-ba3afec20f0c';

  constructor(private artistService: ArtistService) {
    this.artist = this.artistService.getArtist(this.artistId);
  }

}
