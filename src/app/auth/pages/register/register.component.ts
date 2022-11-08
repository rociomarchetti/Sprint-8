import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  open(content:any) {
    this.registerModal.open(content)
  }


  constructor(public registerModal: NgbModal) { }

  ngOnInit(): void {
  }

}
