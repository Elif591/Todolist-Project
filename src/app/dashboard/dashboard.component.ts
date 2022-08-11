import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ITask } from '../tasks/tasks.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private authservice: AuthService) {}
  tasks = new Array<ITask>;


  ngOnInit() {
    this.AllTasks();
  }

  AllTasks() {
    let data = localStorage.getItem('token');
    let decoded = this.authservice.DecodeToken(data);
    this.authservice.AllTasks(Number(decoded.sub)).subscribe((resp) => {

      if (resp != null) {
        resp.forEach((task=>{
        this.tasks.push(task)

       }))
      }
    });
  }
}
