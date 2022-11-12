import { switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Film, Ship } from './../../interfaces/ship.interface';
import { ShipsService } from './../../services/ships.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  filmData: [] = [];

  imageUrl: string = 'https://starwars-visualguide.com/assets/img/films/';
  @Input() ship!: Ship;

  constructor(
    private ShipsService: ShipsService,
    private activatedRoute: ActivatedRoute
  ) {}

  get filmList() {
    return this.ShipsService.filmList;
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(async ({ id }) => this.ShipsService.getFilmsList(id)),
        tap(console.log)
      )
      .subscribe((list) => this.filmData = list)
  }
}
