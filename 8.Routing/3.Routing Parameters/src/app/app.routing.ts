import { RouterModule } from '@angular/router';
import { ArtistListComponent } from './artist/artist-list.component';
import { ArtistDetailComponent } from './artist/artist-detail.component';

export const routing = RouterModule.forRoot([
  {
    path: 'artists',
    component: ArtistListComponent
  },
  {
    path: 'artists/:artistId', //artistId - name of the parameter
    // see artist-list.component.html and artist-detail.component.ts to understand how it works
    component: ArtistDetailComponent
  },
  {
    path: '',
    redirectTo: '/artists',
    pathMatch: 'full'
  }
]);
