import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from './user.model';
import { catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AuthService {
  currentUser: IUser;
  isloginUser : boolean;
  public apiUrl: string;

  constructor(private http: HttpClient ) {}

  loginUser(_userName: string, _password: string) {

    let loginInfo = {
      userName: _userName,
      password: _password,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    let response = this.http.post(environment.apiUrlLogin, loginInfo, options).pipe(
      tap((data: any) => {
        this.currentUser = <IUser>data['user'];
      })
    );
    this.isloginUser = true;
    return response;
  }

  registerUser( _Name : string , _Email:string ,_userName: string, _password: string) {
    let loginInfo = {
      Name : _Name,
      Email : _Email,
      userName: _userName,
      password: _password,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    let response = this.http.post(environment.apiUrlRegister, loginInfo, options).pipe(
      tap((data: any) => {
        this.currentUser = <IUser>data['user'];
      })
    );
    this.isloginUser = true
    return response;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
  isLoginUser(){
     return this.isloginUser;
  }
}
