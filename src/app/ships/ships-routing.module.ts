
import { ShipComponent } from './pages/ship/ship.component';
import { ListComponent } from './pages/list/list.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: ':id',
        component: ShipComponent
      },
      {
        path: '**',
        redirectTo: ''
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
