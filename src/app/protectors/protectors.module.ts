import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtectorsPageRoutingModule } from './protectors-routing.module';

import { ProtectorsPage } from './protectors.page';
import { SharedModule } from '../shared/shared.module';
import { SpinnerModule } from '../shared/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SpinnerModule,
    ProtectorsPageRoutingModule
  ],
  declarations: [ProtectorsPage]
})
export class ProtectorsPageModule {}
