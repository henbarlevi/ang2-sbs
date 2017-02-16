import { RouterModule } from '@angular/router'; //import router module
import { ArtistListComponent } from './artist/artist-list.component';
import { ArtistDetailComponent } from './artist/artist-detail.component';

export const routing = RouterModule.forRoot([
  {
    path: 'artists', //localhost:port/artist
    component: ArtistListComponent
  },
  {
    path: 'artists/detail',
    component: ArtistDetailComponent
  },
  {
    path: '',
    redirectTo: '/artists',
    pathMatch: 'full' //match to this route if the full path is '' emptystring
  }
]);
