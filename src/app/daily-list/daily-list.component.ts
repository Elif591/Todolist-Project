import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../tasks/tasks.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css']
})
export class DailyListComponent implements OnInit {

  constructor( private authservice:AuthService) { }
  @Input() tasks = new Array<ITask>;
   task = new Array<ITask>;
   tasktitle : string;
   explanation : string;
   note : string;
   startDate : string;
   complated : boolean;
  ngOnInit(): void {

  }
   dailymodal(_taskId : number){
      this.task=new Array<ITask>;
    this.task.push(this.tasks.find((x) => x.taskId == _taskId))
    if(this.task !=null){
      this.task.forEach((x => {
         this.tasktitle = x.taskTitle
         this.explanation = x.explanation
         this.note = x.note
         this.startDate = x.startDate
         this.complated = x.completed
      }))
     }}
}
