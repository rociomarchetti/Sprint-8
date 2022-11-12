import { Ship } from '../interfaces/ship.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

  transform(ship: Ship): string {
    const url: string = ship.url
    const id: string = url.replace(/\D/g, '');
    return id
  }
}