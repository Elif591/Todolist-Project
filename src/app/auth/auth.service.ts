import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from './user.model';
import { catchError, of, tap } from 'rxjs';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {}

  loginUser(_userName: string, _password: string) {
    debugger;
    let loginInfo = {
      userName: _userName,
      password: _password,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http
      .post('/api/login', loginInfo, options)
      .pipe(tap((data:any) => {
        this.currentUser = <IUser> data['user']
      })
      )
      .pipe(
        catchError((err) => {
          return of(false);
        })
      );
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
}
