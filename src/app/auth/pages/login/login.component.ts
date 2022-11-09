import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  open(content:any) {
    this.loginModal.open(content)
  }

  loginForm: FormGroup = this.fb.group({
    emailForm: ['', [Validators.required, Validators.email]],
  })

  checkUser() {
    this.AuthService.checkUser(this.loginForm.value.emailForm)
  }

  invalid(field: string) {
    return this.loginForm.controls[field].errors;
  }

  constructor(public loginModal: NgbModal, private fb: FormBuilder, private AuthService: AuthService) { }

  ngOnInit(): void {
  }

}
