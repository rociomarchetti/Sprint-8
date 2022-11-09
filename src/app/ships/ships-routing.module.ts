import { ShipComponent } from './pages/ship/ship.component';
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: ':id',
        component: ShipComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShipsRoutingModule { }
