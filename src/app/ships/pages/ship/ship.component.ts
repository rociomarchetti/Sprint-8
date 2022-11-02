
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Ship } from '../../interfaces/ship.interface';
import { ShipsService } from './../../services/ships.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css'],
})
export class ShipComponent implements OnInit {

  @Input() ship!: Ship;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ShipsService: ShipsService
  ) {}

  imageUrl: string = 'https://starwars-visualguide.com/assets/img/starships';

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.ShipsService.getShipById(id)),
        tap(console.log)
        )
      .subscribe((ship) => (this.ship = ship));
  }
}
