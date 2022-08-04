import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../auth/user.model';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.pattern('[a-zA-Z].*')]],
      Email: ['', [Validators.required, Validators.email]],
      userName: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z].*'),
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  register(formValues: IUser) {
    if (this.registerForm.valid) {
      this.authService
        .registerUser(formValues.Name , formValues.Email ,formValues.userName, formValues.password)
        .subscribe((resp) => {
          if (resp == false) {
            this.toastr.warning('This email have got a users');
          } else {
            this.toastr.success('Registration successful');
          }
           this.route.navigate(['/login']);
        });
    }
  }
}
