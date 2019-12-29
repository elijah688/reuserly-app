import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlutesPageRoutingModule } from './flutes-routing.module';

import { FlutesPage } from './flutes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlutesPageRoutingModule
  ],
  declarations: [FlutesPage]
})
export class FlutesPageModule {}
