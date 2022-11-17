import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitMSG: string = '';
  routeControl: boolean = false;
  currentURL = window.location.href;

  open(content: any) {
    this.modalService.open(content);
  }

  loginForm: FormGroup = this.fb.group({
    emailForm: ['', [Validators.required, Validators.email]],
    passForm: ['', [Validators.required, Validators.minLength(4)]]
  });

  checkUser() {
    this.AuthService.checkUser(this.loginForm.value.emailForm, this.loginForm.value.passForm);
    if (this.AuthService.loginControl === true) {
      this.submitMSG = `Welcome back, ${this.AuthService.loggedUser}`;
    } else {
      this.submitMSG = 'This user does not seems to exist :(';
    }
  }

  invalid(field: string) {
    return (
      this.loginForm.get(field)?.invalid && this.loginForm.get(field)?.touched
    );
  }

  constructor(
    public modalService: NgbModal,
    private fb: FormBuilder,
    private AuthService: AuthService,
    public router: Router,
  ) {}

  ngOnInit(): void {
    if ((this.currentURL.includes('login'))) {
      this.routeControl = true;
    } else {
      this.routeControl = false;
    }
  }
}
