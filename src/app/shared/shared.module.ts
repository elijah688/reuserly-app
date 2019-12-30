import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutOfStockPipe } from './pipes/out-of-stock.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [OutOfStockPipe],
  exports: [OutOfStockPipe]
})
export class SharedModule { }