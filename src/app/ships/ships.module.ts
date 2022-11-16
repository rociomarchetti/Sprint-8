import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ShipsRoutingModule } from './ships-routing.module';

import { ShipComponent } from './pages/ship/ship.component';
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { IdPipe } from './pipes/id.pipe';
import { ShipCardComponent } from './components/ship-card/ship-card.component';
import { PilotsComponent } from './components/pilots/pilots.component';
import { FilmsComponent } from './components/films/films.component';

@NgModule({
  declarations: [
    ShipComponent,
    ListComponent,
    HomeComponent,
    IdPipe,
    ShipCardComponent,
    PilotsComponent,
    FilmsComponent
  ],
  imports: [
    CommonModule,
    ShipsRoutingModule, 
    InfiniteScrollModule,
    NgbModule
  ]
})
export class ShipsModule { }
