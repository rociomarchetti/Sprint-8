import { AuthRoutingModule } from './../auth/auth-routing.module';
import { AuthModule } from './../auth/auth.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthModule,
    AuthRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
