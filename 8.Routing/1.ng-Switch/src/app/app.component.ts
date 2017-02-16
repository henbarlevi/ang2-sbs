import { Component } from '@angular/core';

@Component({
  selector: 'angular-tunes',
  template: `
    <div class="container" [ngSwitch]="state">
      <artist-list *ngSwitchCase="'artist-list'"
        (artistSelect)="showArtistDetail($event)"></artist-list>
      <artist-detail *ngSwitchCase="'artist-detail'"
        [artistId]="selectedArtistId"></artist-detail>
    </div>
  `//[ngSwitch]="state" - the 'state' property will tell which of the Components (artist-list/artist-detail) will be display
  //*ngSwitchCase="'artist-list'" - the artist-list Component will be display of the 'state' prop value will be 'artist-list'
  
})
export class AppComponent {

  state = 'artist-list';
  selectedArtistId;

  showArtistDetail(artistId) {
    this.selectedArtistId = artistId;
    this.state = 'artist-detail';
  }

}
