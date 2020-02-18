import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';

@Injectable()

export class RouteGuardService implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if ( localStorage.getItem('userType') === "0" ) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }

  }

}