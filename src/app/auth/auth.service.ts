import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from './user.model';
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

  createNewTask(
    TaskTitle: string,
    Explanation: string,
    Note: string,
    UserId: number
  ) {
    let loginInfo = {
      TaskTitle: TaskTitle,
      Explanation: Explanation,
      Note: Note,
      UserId: UserId,
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

  DecodeToken(token: string): string {
    return jwt_decode(token);
  }

  AllTasks(userId: number) {
    let loginInfo = {
      userId: userId,
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

  Searchtasks(_userId: number , searchTerm : string) {
       return this.http.get<ITask[]>(environment.apiUrlSearchTask + '?_userId=' + _userId + '&searchTerm=' + searchTerm)

  }

  DeleteTask(taskId:number){
       let loginInfo = {
         taskId: taskId,
       };
       let options = {
         headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
       };

       let response = this.http.post(
         environment.apiUrlDeleteTask,
         loginInfo,
         options
       );
      return response;
  }
}

