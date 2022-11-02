import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from '../interfaces/ship.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor( private http: HttpClient) { }

  getShipsList(): Observable<Ship[]> {
    return this.http.get<Ship[]>('https://swapi.dev/api/starships')
  }

  getShipById(id: number): Observable<Ship> {
    return this.http.get<Ship>(`https://swapi.dev/api/starships/${id}/`)
  }
}
