import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DailyListComponent } from './daily-list/daily-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MonthlyListComponent } from './monthly-list/monthly-list.component';
import { CreatetaskComponent } from './createtask/createtask.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MonthlyListComponent,
    DashboardComponent,
    CreatetaskComponent,
    RegisterComponent,
    LoginComponent,
    DailyListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
