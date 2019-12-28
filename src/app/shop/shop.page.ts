import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopService } from './shop.service';
import { Product } from './product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.sass'],
})
export class ShopPage implements OnInit, OnDestroy {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  private prodsSubscription:Subscription = new Subscription();
  products:Product[]=[];

  constructor(private shopServ:ShopService) { }

  ngOnInit() {
    this.shopServ.getProducts();
    this.prodsSubscription = this.shopServ.prodSubject.subscribe(prods=>{
      this.products = prods;
      console.log(this.products);
    })   
  }

  ngOnDestroy(): void {
    this.prodsSubscription.unsubscribe()
  }

  hasNumber(color:string) {
    return /\d/.test(color);
  }

}
