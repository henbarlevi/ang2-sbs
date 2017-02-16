import { RouterModule } from '@angular/router';
import { LoggedInGuard } from './login/logged-in.guard'; //import guard
import { LoginFormComponent } from './login/login-form.component';
import { ArtistListComponent } from './artist/artist-list.component';
import { ArtistDetailComponent } from './artist/artist-detail.component';
import { AlbumListComponent } from './album/album-list.component';
import { AlbumDetailComponent } from './album/album-detail.component';

export const routing = RouterModule.forRoot([
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'artists',
    component: ArtistListComponent
  },
  {
    path: 'artists/:artistId',
    component: ArtistDetailComponent
  },
  {
    path: 'albums',
    component: AlbumListComponent
  },
  {
    path: 'albums/:albumId',
    component: AlbumDetailComponent,
    canActivate: [LoggedInGuard] //the user can go to this route only if the LoggedInGuard allow it
  },
  {
    path: '',
    redirectTo: '/artists',
    pathMatch: 'full'
  }
]);
