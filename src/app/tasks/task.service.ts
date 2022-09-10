import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { ITask } from '../tasks/tasks.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  currentToken: any;
  isloginUser: boolean;
  decodedUserId: string;
  public apiUrl: string;

  constructor(private http: HttpClient) {}

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

  Searchtasks(userId: number, searchTerm: string) {
    return this.http.get<ITask[]>(
      environment.apiUrlSearchTask +
        '?userId=' +
        userId +
        '&searchTerm=' +
        searchTerm
    );
  }

  DeleteTask(taskId: number) {
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

  ComplatedTask(taskId: number) {
    let loginInfo = {
      taskId: taskId,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    let response = this.http.post(
      environment.apiUrlComplatedTask,
      loginInfo,
      options
    );
    return response;
  }

  ComplatedChangeTask(taskId: number) {
    let loginInfo = {
      taskId: taskId,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    let response = this.http.post(
      environment.apiUrlComplatedChangeTask,
      loginInfo,
      options
    );
    return response;
  }

  PriorityTask(taskId: number) {
    let loginInfo = {
      taskId: taskId,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    let response = this.http.post(
      environment.apiUrlPriorityTask,
      loginInfo,
      options
    );
    return response;
  }

  PriorityChangeTask(taskId: number) {
    let loginInfo = {
      taskId: taskId,
    };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    let response = this.http.post(
      environment.apiUrlPriorityChangeTask,
      loginInfo,
      options
    );
    return response;
  }

}