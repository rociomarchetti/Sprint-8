import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  disabled: boolean = false;
  submitMSG: string = '';

  open(content: any) {
    this.registerModal.open(content);
  }

  registerForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    updateOn: 'blur'
  });

  registerUser() {
    if (this.registerForm.valid) {
      let n: string = this.registerForm.value.firstName;
      let l: string = this.registerForm.value.lastName;
      let e: string = this.registerForm.value.email;
      let p: string = this.registerForm.value.password;
      this.AuthService.registerUser(n, l, e, p);
      /* this.submitMSG = 'New user registered with success!' */
      this.registerModal.dismissAll()
    } else {
      this.registerForm.markAllAsTouched();
      this.submitMSG = 'Something went wrong :('
    }
  }

  constructor(
    public registerModal: NgbModal,
    private fb: FormBuilder,
    private AuthService: AuthService
  ) {}

  invalid(field: string) {
    return this.registerForm.get(field)?.invalid &&
           this.registerForm.get(field)?.touched;
  }

  ngOnInit(): void {}
}