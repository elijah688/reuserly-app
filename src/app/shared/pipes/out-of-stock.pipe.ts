import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'outOfStock'
})
@Injectable()
export class OutOfStockPipe implements PipeTransform {

  transform(value: number): string {
    if(value===0.00){
      return 'OUT OF STOCK'
    }
    else{
      return `£ ${value}`;
    }
  }

}
