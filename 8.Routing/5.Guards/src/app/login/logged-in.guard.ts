import { Injectable } from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoggedInGuard implements CanActivate { //CanActivate - called when trying to reach the route: 'albums/:albumId' (look in app.routing.ts)

  constructor(private router: Router,
              private loginService: LoginService) { }

//return bool if the route can be activate + navigate to the /login if it cant:
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.loginService.loggedIn) {
      this.router.navigate(['/login']); //navigate the app to /login path (login form)
      return false;
    }
    return true;
  }

}
