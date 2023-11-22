import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthGaurdService } from '../Service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private auth:AuthGaurdService, private route:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
    //   if(!this.auth.LoggedIn()){
    //     this.route.navigate(['/login']);
    //     return false;
    //   }
    // return this.auth.LoggedIn();

    return true;
  }
  
}
