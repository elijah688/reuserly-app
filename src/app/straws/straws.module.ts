import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrawsPageRoutingModule } from './straws-routing.module';

import { StrawsPage } from './straws.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    StrawsPageRoutingModule
  ],
  declarations: [StrawsPage]
})
export class StrawsPageModule {}
