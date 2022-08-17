import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ITask } from '../tasks/tasks.model';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css'],
})
export class CreatetaskComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  createTaskForm: FormGroup;
  taskTitle: FormControl;
  explanation: FormControl;
  note: FormControl;
  task: ITask;

  ngOnInit(): void {
    this.createTaskForm = this.formBuilder.group({
      taskTitle: ['', [Validators.required]],
      explanation: ['', [Validators.required]],
      note: [''],
    });
  }

  createTask(formValues: ITask) {
    let data = localStorage.getItem('token');
    let decoded = this.authservice.DecodeToken(data);
    if (this.createTaskForm.valid) {
      this.authservice
        .createNewTask(
          formValues.taskTitle,
          formValues.explanation,
          formValues.note,
          Number(decoded.sub.toString())
        )
        .subscribe((resp) => {
          if (resp == true) {
            this.toastr.success('Succesfully');
          }
          this.router.navigate(['dashboard']);
        });
    }
  }

  inputControl() {
    if (!this.createTaskForm.valid) {
       this.toastr.warning('Do not title or explanation invalid');
    }
  }
}
