import { Ship } from '../interfaces/ship.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

  transform(ship: Ship): string {
    return ship.url.replace(/\D/g, '');
  }
}