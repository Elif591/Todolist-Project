import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../tasks/tasks.model';
import { AuthService } from '../auth/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { routes } from '../app-routing.module';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css']
})
export class DailyListComponent implements OnInit {

  constructor( private authservice:AuthService , private toastr:ToastrService , private router : Router ) { }
  @Input() tasks = new Array<ITask>;
   task = new Array<ITask>;
   tasktitle : string;
   explanation : string;
   note : string;
   startDate : string;
   complated : boolean;
  ngOnInit(): void {

  }
   dailymodal(taskId : number){
    this.task=new Array<ITask>;
    this.task.push(this.tasks.find((x) => x.taskId == taskId))
    if(this.task !=null){
      this.task.forEach((x => {
         this.tasktitle = x.taskTitle
         this.explanation = x.explanation
         this.note = x.note
         this.startDate = x.startDate
         this.complated = x.completed
      }))
     }}

     dailydelete(taskId : number){
        this.authservice.DeleteTask(taskId).subscribe((response) => {
            if(response != false){

                this.toastr.warning('Delete task');
                window.location.reload();
            }
        })

     }
}
