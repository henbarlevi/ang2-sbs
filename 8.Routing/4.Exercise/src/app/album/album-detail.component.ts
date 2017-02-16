import { Component ,OnInit, OnDestroy} from '@angular/core';//import the OnInit and OnDestroy interfaces
import { AlbumService } from './album.service';

import { ActivatedRoute } from '@angular/router'; //class that contain info about the current active route

@Component({
  selector: 'album-detail',
  template: require('./album-detail.component.html')
})
export class AlbumDetailComponent implements OnInit, OnDestroy{ //implements the OnInit and OnDestroy interfaces

  album;

  paramsSubscription
  constructor(private albumService: AlbumService, private route:ActivatedRoute) {
   
    
  }
  //method that invoked when the component get created
  ngOnInit(){
    this.paramsSubscription =this.route.params.subscribe(
      params => {this.album = this.albumService.getAlbum(params['albumId']);
        });//getting the albumId parameter from the ActivatedRoute and sending it to the albumService to get the album info
    
  }
  //method that invoked when the component get destroyed
  ngOnDestroy(){
    this.paramsSubscription.unsubscribe(); //when component destroyed the component will no longer listen to the ActivatedRoute.params (prevent memory leak)
  }
}
