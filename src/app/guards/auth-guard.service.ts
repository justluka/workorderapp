import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        // Does the token exist ?
        if (sessionStorage.getItem('token')) {
            return true;
        }
 
        // No token, go to the login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}