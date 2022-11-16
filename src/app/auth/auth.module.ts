import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginPageComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
