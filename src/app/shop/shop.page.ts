import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { IonSlides } from '@ionic/angular';
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

  @ViewChild('slides', {static:false}) slides:IonSlides
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

  slideTo(slideNumber:number){
    this.slides.slideTo(slideNumber);
  }

}
