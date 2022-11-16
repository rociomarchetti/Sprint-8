import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  } 
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
