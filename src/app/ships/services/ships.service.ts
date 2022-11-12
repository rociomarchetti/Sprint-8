import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilot } from '../interfaces/pilot.interface';
import { Ship } from '../interfaces/ship.interface';

@Injectable({
  providedIn: 'root',
})
export class ShipsService {
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
}
