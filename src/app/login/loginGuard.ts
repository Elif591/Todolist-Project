import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = !!localStorage.getItem('token')
    if (logged) {
    }
    else {
      this.router.navigate(['login']);
      this.toastr.error('You must log in to the system to access the page!');
    }
    return logged;
  }
}
