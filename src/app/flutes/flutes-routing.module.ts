import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlutesPage } from './flutes.page';

const routes: Routes = [
  {
    path: '',
    component: FlutesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlutesPageRoutingModule {}
