import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatetaskComponent } from './createtask/createtask.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './login/loginGuard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'newtask',
    component: CreatetaskComponent,
    canActivate: [LoginGuard],
  },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
