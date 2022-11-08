import { Component, OnInit } from '@angular/core';

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

  constructor(public loginModal: NgbModal) { }

  ngOnInit(): void {
  }

}
