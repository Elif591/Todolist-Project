import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../tasks/tasks.model';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css']
})
export class DailyListComponent implements OnInit {

  constructor( private authservice:AuthService , private toastr:ToastrService , private router : Router) { }
  @Input() tasks = new Array<ITask>;
  @Output() delete = new EventEmitter();
  @Output() checkFalse = new EventEmitter();
  @Output() checkTrue = new EventEmitter();
  @Output() priorityFalse = new EventEmitter();
  @Output() priorityTrue = new EventEmitter();
   task = new Array<ITask>;
   tasktitle : string;
   explanation : string;
   note : string;
   startDate : string;
   finishDate : string;
   completed : boolean;
   taskComplated : boolean;
   taskPriority : boolean;

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
         this.finishDate = x.finishDate
         this.completed = x.completed
      }))
     }
    }

     dailydelete(taskId : number){
        this.authservice.DeleteTask(taskId).subscribe((response) => {
            if(response != false){
                this.toastr.warning('Delete task');
                 this.delete.emit(taskId);
            }
        })
     }



     Check(taskId : number){
     this.taskComplated = this.tasks.find((x) => x.taskId == taskId).completed
     if(this.taskComplated == true){
          this.authservice.ComplatedChangeTask(taskId).subscribe((response) => {
            if(response != false){
                this.toastr.success('Succesfully');
                this.checkFalse.emit(taskId)
            }
        })
     }else{
    this.authservice.ComplatedTask(taskId).subscribe((response) => {
            if(response != false){
                this.toastr.success('Succesfully');
                this.checkTrue.emit(taskId)
            }
        })

     }
     }


     Priorty(taskId : number){
      this.taskPriority = this.tasks.find((x) => x.taskId == taskId).priority
     if(this.taskPriority == true){
          this.authservice.PriorityTask(taskId).subscribe((response) => {
            if(response != false){
                this.toastr.success('Succesfully');
                this.priorityFalse.emit(taskId)
            }
        })
     }else{
    this.authservice.PriorityChangeTask(taskId).subscribe((response) => {
            if(response != false){
                this.toastr.success('Succesfully');
                this.priorityTrue.emit(taskId)
            }
        })

     }

 }


}
