import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrawsPage } from './straws.page';

const routes: Routes = [
  {
    path: '',
    component: StrawsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrawsPageRoutingModule {}
