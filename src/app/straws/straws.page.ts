import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopService } from '../shared/services/shop.service';
import { Straw } from './straw.model';
import { SocialLink, StoreLink, links } from '../shared/links/links';
import { Color } from '../shared/models/color.model';

@Component({
  selector: 'app-straws',
  templateUrl: '../shared/product.template/product.html',
  styleUrls: ['../shared/product.template/product.sass', './straws.page.sass']
})
export class StrawsPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  private strawsSub:Subscription = new Subscription();
  products:Straw[];
  stores:StoreLink[] = links.stores
  socials:SocialLink[] = links.socials
  currentColor:Color;
  constructor(private shopServ:ShopService) { }

  ngOnInit():void {
    this.shopServ.getStraws();
    this.strawsSub = this.shopServ.strawSubject.subscribe(strwas=>{
      this.products = strwas;
      this.currentColor = this.products[0].colors[0];
    })   
  }

  ngOnDestroy(): void {
    this.strawsSub.unsubscribe()
  }

  setCurrentColor(c:Color){
    this.currentColor = c;
    console.log('current color is: ' + this.currentColor.value)
  }
}
