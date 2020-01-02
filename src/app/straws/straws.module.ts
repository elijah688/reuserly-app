import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrawsPageRoutingModule } from './straws-routing.module';

import { StrawsPage } from './straws.page';
import { SharedModule } from '../shared/shared.module';
import { SpinnerModule } from '../shared/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    FormsModule,
    SharedModule,
    IonicModule,
    StrawsPageRoutingModule
  ],
  declarations: [StrawsPage]
})
export class StrawsPageModule {}
