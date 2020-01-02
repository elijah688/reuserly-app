import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopService } from '../shared/services/shop.service';
import { Straw } from './straw.model';
import { SocialLink, StoreLink, links } from '../shared/links/links';
import { Color } from '../shared/models/color.model';
import { Size } from '../shared/models/size.model';

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
  currentSize:Size;
  loading:boolean = true;
  spinnerClass:string = 'straw-spinner'
  constructor(private shopServ:ShopService) { }

  ngOnInit():void {
    this.shopServ.getStraws();
    this.strawsSub = this.shopServ.strawSubject.subscribe(strwas=>{
      this.products = strwas;
      this.currentColor = this.products[0].colors[0];
      this.loading = false;
    })   
  }

  ngOnDestroy(): void {
    this.strawsSub.unsubscribe()
  }

  setCurrentColor(c:Color){
    this.currentColor = c;
  }

  setCurrentSize(s:Size):void{
    this.currentSize = s;
  }

}
