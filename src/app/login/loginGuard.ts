import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private authservice: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = this.authservice.isLoginUser();
    if (logged) {
    } else {
      this.router.navigate(['login']);
      this.toastr.error('You must log in to the system to access the page!');
    }
    return logged;
  }
}
