import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginControl: boolean = false;
  loggedUser: any = 'Guest';
  contadorID: number = 1;
  usersList: User[] = [
    {
      id: 1,
      userName: 'rocio',
      userEmail: 'rocio@mail.com',
      userPassword: '1234',
    },
  ];

  /* Login */

  checkUser(email: string) {
    if (this.usersList.find((user) => user.userEmail === email)) {
      let user = this.usersList.find((user) => user.userEmail === email);
      this.loginControl = true;
      this.loggedUser = user?.userName;
      this.loginControlToLS(this.loginControl);
      this.userNameToLS(this.loggedUser);
    } 
  }

  /* Logout */

  logout() {
    this.loginControl = false;
    this.loginControlToLS(this.loginControl);
    this.loggedUser = 'Guest';
    this.userNameToLS(this.loggedUser);
  }

  /* Create new user */

  registerUser(name: string, lastname: string, email: string, password: any) {
    this.contadorID++;

    let newUser: User = {
      id: this.contadorID,
      userName: name,
      userEmail: email,
      userPassword: password,
    };

    this.usersList.push(newUser);
    this.saveUsersToLS(this.usersList);
    this.loginControl = true;
    this.loginControlToLS(this.loginControl);
    this.loggedUser = newUser.userName;
    this.checkUser(newUser.userEmail);
  }

  /* Save to LocalStorage */

  saveUsersToLS(usersList: User[]) {
    localStorage.setItem('usersList', JSON.stringify(usersList));
  }

  loginControlToLS(loginControl: boolean) {
    localStorage.setItem(`login`, JSON.stringify(loginControl));
  }

  userNameToLS(userName: string) {
    localStorage.setItem('userName', userName);
  }

  /* Get from LocalStorage */

  getUsersFromLS(key: string) {
    this.usersList = JSON.parse(localStorage.getItem(key)!);
  }

  getLoginControlFromLS(key: string) {
    this.loginControl = JSON.parse(localStorage.getItem(key)!);
  }

  getNameFromLS(key: string) {
    this.loggedUser = localStorage.getItem(key);
  }

  constructor() {}
}
