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
import { AuthService  } from './auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { LoginGuard } from './login/loginGuard';
import { DashboardGuard } from '../app/dashboard/DashboardGuard';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [AuthService, ToastrService, LoginGuard, DashboardGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
