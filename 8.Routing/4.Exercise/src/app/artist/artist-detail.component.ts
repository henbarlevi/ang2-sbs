import { Subscription } from 'rxjs/Subscription'; //in order to
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //class that contain info about the current active route
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist-detail',
  template: require('./artist-detail.component.html')
})
export class ArtistDetailComponent implements OnInit, OnDestroy {

  artist;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private artistService: ArtistService) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.artist = this.artistService.getArtist(params['artistId']);
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
