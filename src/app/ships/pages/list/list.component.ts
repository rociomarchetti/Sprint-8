import { Ship, Response } from './../../interfaces/ship.interface';
import { ShipsService } from './../../services/ships.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  shipsList: Ship[] = [];
  
  constructor( private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.shipsService.getShipsList().subscribe((resp: any) => {
      console.log(resp.results);
      this.shipsList = resp.results;
    });
  }

}
