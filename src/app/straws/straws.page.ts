import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopService } from '../shared/services/shop.service';
import { Straw } from './straw.model';

@Component({
  selector: 'app-straws',
  templateUrl: './straws.page.html',
  styleUrls: ['./straws.page.sass'],
})
export class StrawsPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  private strawsSub:Subscription = new Subscription();
  straws:Straw[];

  constructor(private shopServ:ShopService) { }

  ngOnInit():void {
    this.shopServ.getStraws();
    this.strawsSub = this.shopServ.strawSubject.subscribe(strwas=>{
      this.straws = strwas;
      console.log(this.straws)
    })   
  }

  ngOnDestroy(): void {
    this.strawsSub.unsubscribe()
  }

  hasNumber(color:string) {
    return /\d/.test(color);
  }

}
