import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipsRoutingModule } from './ships-routing.module';

import { ShipComponent } from './pages/ship/ship.component';
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { IdPipe } from './pipes/id.pipe';

@NgModule({
  declarations: [
    ShipComponent,
    ListComponent,
    HomeComponent,
    IdPipe
  ],
  imports: [
    CommonModule,
    ShipsRoutingModule, 
  ]
})
export class ShipsModule { }
