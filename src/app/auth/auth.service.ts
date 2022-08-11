import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from './user.model';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import jwt_decode from 'jwt-decode';
import { ITask } from '../tasks/tasks.model';

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

  loginUser(_userName: string, _password: string) {
    let loginInfo = {
      userName: _userName,
      password: _password,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    let response = this.http
      .post(environment.apiUrlLogin, loginInfo, options)
      .pipe(tap((data: any) => {}));
    return response;
  }

  registerUser(
    _Name: string,
    _Email: string,
    _userName: string,
    _password: string
  ) {
    let loginInfo = {
      Name: _Name,
      Email: _Email,
      userName: _userName,
      password: _password,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    let response = this.http
      .post(environment.apiUrlRegister, loginInfo, options)
      .pipe(
        tap((data: any) => {
          this.currentUser = <IUser>data['user'];
        })
      );
    return response;
  }

  createNewTask(
    _TaskTitle: string,
    _Explanation: string,
    _Note: string,
    _UserId: number
  ) {
    let loginInfo = {
      TaskTitle: _TaskTitle,
      Explanation: _Explanation,
      Note: _Note,
      UserId: _UserId,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    let response = this.http.post(
      environment.apiUrlNewTask,
      loginInfo,
      options
    );

    return response;
  }

  isLoginUser() {
    return this.isloginUser;
  }

  DecodeToken(token: any): string {
    return jwt_decode(token);
  }

  AllTasks(_userId: number) {
    let loginInfo = {
      userId: _userId,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    let response = this.http.post<ITask[]>(
      environment.apiUrlAllTask,
      loginInfo,
      options
    );

    return response;
  }


}

