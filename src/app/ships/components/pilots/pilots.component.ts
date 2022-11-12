import { Ship } from './../../interfaces/ship.interface';
import { Pilot } from '../../interfaces/pilot.interface';
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
/*   shipPilotsList: string[] = []; */
  pilotsData: any[] = [];
 
  @Input() ship!: Ship;

  imageUrl: string = 'https://starwars-visualguide.com/assets/img/characters/';

  constructor(
    private activatedRoute: ActivatedRoute,
    private ShipsService: ShipsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.ShipsService.getPilot(id)),
        tap(console.log)
      )
      .subscribe((pilot) => this.pilotsData.push(pilot));
  }
}
