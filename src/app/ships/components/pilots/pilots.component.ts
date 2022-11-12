import { Ship } from './../../interfaces/ship.interface';
import { Pilot } from './../../interfaces/ship.interface';
import { ShipsService } from './../../services/ships.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css'],
})
export class PilotsComponent implements OnInit {

  pilotsData: Pilot[] = [];
 
  @Input() ship!: Ship;

  imageUrl: string = 'https://starwars-visualguide.com/assets/img/characters/';

  constructor(
    private activatedRoute: ActivatedRoute,
    private ShipsService: ShipsService
  ) {}

  get pilotsList() {
    return this.ShipsService.pilotsList
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(async ({ id }) => this.ShipsService.getPilotsList(id)),
        tap(console.log)
      )
      .subscribe((list) => this.pilotsData = list);
  }
}
