import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DailyListComponent } from './daily-list/daily-list.component';
import { DailyMonthlyComponent } from './daily-monthly/daily-monthly.component';
import { MonthlyListComponent } from './monthly-list/monthly-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreatetaskComponent } from './createtask/createtask.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DailyListComponent,
    DailyMonthlyComponent,
    MonthlyListComponent,
    RegisterComponent,
    LoginComponent,
    CreatetaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
