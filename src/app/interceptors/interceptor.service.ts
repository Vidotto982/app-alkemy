import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import { LoginComponent } from "../login/login.component";
import {LoginService} from "../services/login-service.";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private sessionService: LoginService,
              private snackBar: MatSnackBar) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(route);
    // This won't allow the user to enter the login page if its already logged in
    if (this.sessionService.isLoggedIn()) {
      if (route.url[0]?.path === 'login') {
         this.router.navigate(['/home']);
        this.snackBar.open('You are already logged in', 'OK', {
          duration: 3000,
        });
      }
      return true;
    }
    // navigate to login page as user is not authenticated
    this.router.navigate(['/login']);
    return false;
  }

}
