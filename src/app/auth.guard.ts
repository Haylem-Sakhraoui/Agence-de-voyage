import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LoginService } from './Services/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const adminData = this.loginService.getAdminData();

    if (!adminData) {
      // Redirect to login if not an admin or not logged in
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
