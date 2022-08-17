import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatetaskComponent } from './createtask/createtask.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './login/loginGuard';
import { DashboardGuard } from './dashboard/DashboardGuard';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [DashboardGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [DashboardGuard],
  },
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
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
