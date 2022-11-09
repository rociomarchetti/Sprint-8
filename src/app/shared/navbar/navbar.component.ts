import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public router: Router, private AuthService: AuthService) {}

  get loggedUser() {
    return this.AuthService.loggedUser;
  }

  get loginControl() {
    return this.AuthService.loginControl;
  }

  logout() {
    this.AuthService.logout();
  }

  ngOnInit(): void {}
}
