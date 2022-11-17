import { Film } from './../interfaces/ship.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilot } from '../interfaces/ship.interface';
import { Ship } from '../interfaces/ship.interface';

@Injectable({
  providedIn: 'root',
})
export class ShipsService {
  filmList: Film[] = [];
  pilotsList: Pilot[] = [];

  constructor(private http: HttpClient) {}

  getShipsList(page: number): Observable<Ship[]> {
    return this.http.get<Ship[]>(
      `https://swapi.dev/api/starships/?page=${page}`
    );
  }

  getShipById(id: number): Observable<Ship> {
    return this.http.get<Ship>(`https://swapi.dev/api/starships/${id}/`);
  }

  getPilot(id: string): Observable<Pilot> {
    return this.http.get<Pilot>(`https://swapi.dev/api/people/${id}`);
  }

  getPilotsList(id: string) {
    this.http.get<Ship>(`https://swapi.dev/api/starships/${id}/`)
    .subscribe((ship) => {
      const list = ship.pilots
      list.forEach(element => {
        const id = element.replace(/[^0-9]+/g, '')
        this.http.get<Pilot>(`https://swapi.dev/api/people/${id}`)
        .subscribe((pilot) => {
          this.pilotsList.push(pilot)
          console.log('hay lista de pilotos', this.pilotsList)
        })
      });
    })
    return this.filmList
  }

  getFilmsList(id: string) {
    this.http.get<Ship>(`https://swapi.dev/api/starships/${id}/`)
    .subscribe((ship) => {
      const list = ship.films
      list.forEach(element => {
        const id = element.replace(/[^0-9]+/g, '')
        this.http.get<Film>(`https://swapi.dev/api/films/${id}/`)
        .subscribe((film) => {
          this.filmList.push(film)
          console.log('hay lista', this.filmList)
        })
      });
    })
    return this.filmList
  }
}