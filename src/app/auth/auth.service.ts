import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from './user.model';
import { catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable()
export class AuthService {
  currentUser: IUser;
  public apiUrl: string;

  constructor(private http: HttpClient) {

  }

  loginUser(_userName: string, _password: string) {
    let loginInfo = {
      userName: _userName,
      password: _password,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    let response = this.http.post(environment.apiUrl, loginInfo, options).pipe(
      tap((data: any) => {
        this.currentUser = <IUser>data['user'];
      })
    );
    return response;
  }



  isAuthenticated() {
    return !!this.currentUser;
  }
}
