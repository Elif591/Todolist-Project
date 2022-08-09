import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router , private authService: AuthService) { }

  ngOnInit(): void {
  }
  logout(){
  localStorage.removeItem('token');
   this.router.navigate(["/login"])
  }

}
