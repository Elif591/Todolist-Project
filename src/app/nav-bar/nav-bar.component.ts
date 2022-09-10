import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { TaskService } from '../tasks/task.service';
import { ITask } from '../tasks/tasks.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService , private taskService:TaskService ) {}
  userName: string;
  searchTerm: string = '';
  foundTasks= new Array<string>;
  tasks = new Array<ITask>;
  taskId :number
  task=new Array<ITask>;
   tasktitle : string;
   explanation : string;
   note : string;
   startDate : string;
   finishDate : string;
   completed : boolean;
  ngOnInit(): void {
    let data = localStorage.getItem('token');
    let decoded = this.authService.DecodeToken(data);
    this.userName = decoded['userName'];
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
    AllTasks() {
    let data = localStorage.getItem('token');
    let decoded = this.authService.DecodeToken(data);
    this.taskService.AllTasks(Number(decoded.sub)).subscribe((resp : any) => {

      if (resp != null) {
        resp.forEach(((task:any)=>{
        this.tasks.push(task)
       }))
      }
    });
  }



  searchTasks(searchTerm: string) {
    let data = localStorage.getItem('token');
    let decoded = this.authService.DecodeToken(data);
    if(searchTerm.length >= 2){
    this.taskService.Searchtasks(Number(decoded.sub) , searchTerm).subscribe((resp) => {
      if (resp != null) {
        resp.forEach(((task:any)=>{
        this.foundTasks.push(task.taskTitle)
         this.tasks.push(task)
       }))
      }
    });
    }

    }

    searchdelete(){
      this.foundTasks= new Array<string>;
    }

    routertask(task :string){
      this.taskId =  this.tasks.find((x) => x.taskTitle == task).taskId;
      this.detailmodal(this.taskId);
    }

     detailmodal(taskId : number){
      this.task=new Array<ITask>;
       this.task.push(this.tasks.find((x) => x.taskId == taskId))

        this.task.forEach((x => {
         this.tasktitle = x.taskTitle
         this.explanation = x.explanation
         this.note = x.note
         this.startDate = x.startDate
         this.completed = x.completed
         this.finishDate = x.finishDate
      }))
     }


}
