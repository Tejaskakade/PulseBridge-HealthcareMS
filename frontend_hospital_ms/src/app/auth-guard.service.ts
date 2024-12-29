import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: any): boolean {
    const allowedRoles = route.data.roles || []; // Array of allowed roles
    const userRole = this.authService.getUserRole();

    if (this.authService.isUserLoggedIn() && allowedRoles.includes(userRole)) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
