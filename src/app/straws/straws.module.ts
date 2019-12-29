import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrawsPageRoutingModule } from './straws-routing.module';

import { StrawsPage } from './straws.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrawsPageRoutingModule
  ],
  declarations: [StrawsPage]
})
export class StrawsPageModule {}
