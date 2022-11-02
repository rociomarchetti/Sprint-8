import { Component, Input } from '@angular/core';
import { Ship } from '../../interfaces/ship.interface';

@Component({
  selector: 'app-ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.css']
})
export class ShipCardComponent {

  @Input() ship!: Ship;

}
