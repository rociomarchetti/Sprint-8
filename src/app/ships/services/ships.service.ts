import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ship } from '../interfaces/ship.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor( private http: HttpClient) { }

  getShipsList() {
    return this.http.get('https://swapi.dev/api/starships/')
  }
}
