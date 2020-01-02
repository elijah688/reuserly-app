import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shared/services/shop.service';
import { StoreLink, SocialLink, links } from '../shared/links/links';
import { Subscription } from 'rxjs';
import { Size } from '../shared/models/size.model';
import { Protector } from './protector.model';
import { Color } from '../shared/models/color.model';

@Component({
  selector: 'app-protectors',
  templateUrl: '../shared/product.template/product.html',
  styleUrls: ['../shared/product.template/product.sass', './protectors.page.sass'],
})
export class ProtectorsPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  private prodSub:Subscription = new Subscription();
  products:Protector[];
  currentSize:Size;
  currentColor:Color;
  stores:StoreLink[] = links.stores
  socials:SocialLink[] = links.socials
  loading:boolean = true;
  spinnerClass:string = 'protector-spinner'
  constructor(private shopServ:ShopService) { }

  ngOnInit():void {
    this.shopServ.getProtectors();
    this.prodSub = this.shopServ.protectorsSubject.subscribe(protectors =>{
      this.products = protectors;
      this.currentSize = this.products[0].sizes[0];
      this.loading = false;
    })   
  }

  ngOnDestroy(): void {
    this.prodSub.unsubscribe()
  }

  setCurrentColor(c:Color){
    this.currentColor = c;
  }

  setCurrentSize(s:Size):void{
    this.currentSize = s;
  }


}
