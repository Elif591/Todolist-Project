import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from './user.model';
import { environment } from 'src/environments/environment.prod';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: IUser;
  currentToken: any;
  isloginUser: boolean;
  decodedUserId: string;
  public apiUrl: string;

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {
    let loginInfo = {
      userName: userName,
      password: password,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    let response = this.http.post(environment.apiUrlLogin, loginInfo, options);
    return response;
  }

  registerUser(
    Name: string,
    Email: string,
    userName: string,
    password: string
  ) {
    let loginInfo = {
      Name: Name,
      Email: Email,
      userName: userName,
      password: password,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    let response = this.http.post(
      environment.apiUrlRegister,
      loginInfo,
      options
    );

    return response;
  }

  isLoginUser() {
    return this.isloginUser;
  }

  DecodeToken(token: string): string {
    return jwt_decode(token);
  }

}

