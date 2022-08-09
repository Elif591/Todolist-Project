import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class DashboardGuard implements CanActivate {
  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = !!localStorage.getItem('token');
    if (logged) {
      this.router.navigate(['dashboard']);
      this.toastr.error('hata');
    } else {
      return true;
    }
    return true;
  }
}
