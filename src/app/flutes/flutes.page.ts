import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopService } from '../shared/services/shop.service';
import { Flute } from './flute.model';
import { Color } from '../shared/models/color.model';
import { StoreLink, links, SocialLink } from '../shared/links/links';
import { Size } from '../shared/models/size.model';

@Component({
  selector: 'app-flutes',
  templateUrl: '../shared/product.template/product.html',
  styleUrls: ['../shared/product.template/product.sass', './flutes.page.sass'],
})
export class FlutesPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  private fluteSub:Subscription = new Subscription();
  products:Flute[];
  currentColor:Color;
  currentSize:Size;
  stores:StoreLink[] = links.stores
  socials:SocialLink[] = links.socials
  loading:boolean = true;
  spinnerClass:string = 'flute-spinner'

  constructor(private shopServ:ShopService) { }

  ngOnInit():void {
    this.shopServ.getFlutes();
    this.fluteSub = this.shopServ.flutesSubject.subscribe(flutes=>{
      this.products = flutes;
      this.currentColor = this.products[0].colors[0];
      this.loading = false;
    })   
  }

  ngOnDestroy(): void {
    this.fluteSub.unsubscribe()
  }

  setCurrentColor(c:Color){
    this.currentColor = c;
  }

  setCurrentSize(s:Size):void{
    this.currentSize = s;
  }
  
}
