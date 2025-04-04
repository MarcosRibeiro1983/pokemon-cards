import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard  {
  constructor( private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let canActivate = true;

    if ( !localStorage.getItem('user_session') ) {
      this.router.navigate( ['login'], { queryParams: { redirectTo: state.url } });
      canActivate = false;
    }

    return canActivate;
  }
}