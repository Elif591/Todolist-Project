import {  Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { TaskService } from '../tasks/task.service';
import { ITask } from '../tasks/tasks.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private taskService: TaskService , private authService:AuthService) {}
  tasks = new Array<ITask>;


  ngOnInit() {

    this.AllTasks();

  }

  AllTasks() {
    let data = localStorage.getItem('token');
    let decoded = this.authService.DecodeToken(data);
    this.taskService.AllTasks(Number(decoded.sub)).subscribe((resp) => {
     if (resp != null) {
        resp.forEach((task=>{
        this.tasks.push(task)
        this.sort()
       }))
      }

    });
  }

  delete(taskId : number){
  this.tasks = this.tasks.filter(item => item.taskId !== taskId);
 }

 chackFalse(taskId : number){
    this.tasks.find((x) => x.taskId == taskId).completed = false;
 }

  chackTrue(taskId : number){
    this.tasks.find((x) => x.taskId == taskId).completed = true;
 }

  priorityFalse(taskId : number){
    this.tasks.find((x) => x.taskId == taskId).priority = false;
    this.sort()
 }

  priorityTrue(taskId : number){
    this.tasks.find((x) => x.taskId == taskId).priority = true;
    this.sort()
 }
sort(){
 this.tasks.sort((x , y) => Number(y.priority) - Number(x.priority));
 }


}
