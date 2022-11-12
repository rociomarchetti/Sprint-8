import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitMSG: string = '';

  open(content: any) {
    this.loginModal.open(content);
  }

  loginForm: FormGroup = this.fb.group({
    emailForm: ['', [Validators.required, Validators.email]],
  });

  checkUser() {
    this.AuthService.checkUser(this.loginForm.value.emailForm);
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
    public loginModal: NgbModal,
    private fb: FormBuilder,
    private AuthService: AuthService,
  ) {}

  ngOnInit(): void {}
}
