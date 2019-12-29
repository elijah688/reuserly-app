import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtectorsPage } from './protectors.page';

const routes: Routes = [
  {
    path: '',
    component: ProtectorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectorsPageRoutingModule {}
