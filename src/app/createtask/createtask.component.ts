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
  TaskTitle: FormControl;
  Explanation: FormControl;
  Note: FormControl;
  task: ITask;

  ngOnInit(): void {
    this.createTaskForm = this.formBuilder.group({
      TaskTitle: ['', [Validators.required]],
      Explanation: ['', [Validators.required]],
      Note: ['', [Validators.required]],
    });
  }

  createTask(formValues: ITask) {
      let data = localStorage.getItem('token');
      let decoded = this.authservice.DecodeToken(data);
    if (this.createTaskForm.valid) {
      this.authservice
        .createNewTask(
          formValues.TaskTitle,
          formValues.Explanation,
          formValues.Note,
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
}
