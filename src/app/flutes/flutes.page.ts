import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopService } from '../shop.service';
import { Flute } from './flute.model';
import { Color } from '../color.model';

@Component({
  selector: 'app-flutes',
  templateUrl: './flutes.page.html',
  styleUrls: ['./flutes.page.sass'],
})
export class FlutesPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  private fluteSub:Subscription = new Subscription();
  flutes:Flute[];
  currentColor:Color;

  constructor(private shopServ:ShopService) { }

  ngOnInit():void {
    this.shopServ.getFlutes();
    this.fluteSub = this.shopServ.flutesSubject.subscribe(flutes=>{
      this.flutes = flutes;
      this.currentColor = this.flutes[0].colors[0];
    })   
  }

  ngOnDestroy(): void {
    this.fluteSub.unsubscribe()
  }

  hasNumber(color:string) {
    return /\d/.test(color);
  }

  setCurrentColor(c:Color):void{
    console.log('setting current color...')
    this.currentColor = c;
  }

}
