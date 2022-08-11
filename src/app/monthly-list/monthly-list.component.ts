import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../tasks/tasks.model';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-monthly-list',
  templateUrl: './monthly-list.component.html',
  styleUrls: ['./monthly-list.component.css']
})
export class MonthlyListComponent implements OnInit {


  constructor( private authservice:AuthService) { }
  @Input() tasks = new Array<ITask>;
   task = new Array<ITask>;
   tasktitle : string
   explanation : string
   note : string
   startDate : string
   complated : boolean
  ngOnInit(): void {

  }
  monthlymodal(_taskId : number){
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
