import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shared/services/shop.service';
import { StoreLink, SocialLink, links } from '../shared/links/links';
import { Subscription } from 'rxjs';
import { Size } from '../shared/models/size.model';
import { Protector } from './protector.model';

@Component({
  selector: 'app-protectors',
  templateUrl: '../shared/product.template/product.html',
  styleUrls: ['../shared/product.template/product.sass'],
})
export class ProtectorsPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  private prodSub:Subscription = new Subscription();
  products:Protector[];
  currentSize:Size;
  stores:StoreLink[] = links.stores
  socials:SocialLink[] = links.socials
  constructor(private shopServ:ShopService) { }

  ngOnInit():void {
    this.shopServ.getProtectors();
    this.prodSub = this.shopServ.protectorsSubject.subscribe(protectors =>{
      this.products = protectors;
      this.currentSize = this.products[0].sizes[0];
      console.log(this.products)
    })   
  }

  ngOnDestroy(): void {
    this.prodSub.unsubscribe()
  }

  hasNumber(color:string) {
    return /\d/.test(color);
  }

  setCurrentSize(size:Size){
    this.currentSize = size;
    console.log('current size is: ' + this.currentSize.size)
  }

}
