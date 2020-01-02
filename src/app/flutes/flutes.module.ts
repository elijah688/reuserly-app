import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlutesPageRoutingModule } from './flutes-routing.module';

import { FlutesPage } from './flutes.page';
import { SharedModule } from '../shared/shared.module';
import { SpinnerModule } from '../shared/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    SpinnerModule,
    FlutesPageRoutingModule
  ],
  declarations: [FlutesPage]
})
export class FlutesPageModule {}
