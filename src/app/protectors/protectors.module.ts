import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtectorsPageRoutingModule } from './protectors-routing.module';

import { ProtectorsPage } from './protectors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtectorsPageRoutingModule
  ],
  declarations: [ProtectorsPage]
})
export class ProtectorsPageModule {}
