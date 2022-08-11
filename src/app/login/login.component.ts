import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { IUser } from '../auth/user.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  decode: string;
  constructor(
    private authService: AuthService,
    private route: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
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

  login(formValues: IUser) {
    this.authService.isloginUser = true;
    if (this.loginForm.valid) {
      this.authService
        .loginUser(formValues.userName, formValues.password)
        .subscribe(
          (response) => {
            localStorage.setItem('token', response['token']);
            this.route.navigate(['dashboard']);
          },
          (error) => {
            this.toastr.warning('Incorrect username or password');
          }
        );
    }
  }
}
