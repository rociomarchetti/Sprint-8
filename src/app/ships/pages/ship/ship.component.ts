import { Component, Input } from '@angular/core';
import { Ship } from '../../interfaces/ship.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent {

  constructor(private activatedRoute: ActivatedRoute){}

  imageUrl: string = 'https://starwars-visualguide.com/assets/img/starships';

  @Input() ship!: Ship;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(console.log)
  }

}
