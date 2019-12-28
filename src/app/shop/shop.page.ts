import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.sass'],
})
export class ShopPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  @ViewChild('slides', {static:false}) slides:IonSlides
  constructor() { }

  ngOnInit() {
  }


  slideTo(slideNumber:number){
    this.slides.slideTo(slideNumber);
  }

}
