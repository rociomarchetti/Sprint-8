import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'   
})
export class AuthService {

  loginControl: boolean = false;
  loggedUser: string = 'Guest';
  usersList: User[] = [];

  

  constructor() { }
}
 