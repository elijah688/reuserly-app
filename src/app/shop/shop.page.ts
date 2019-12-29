import { Component, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.sass'],
})
export class ShopPage implements OnInit {
  
  constructor(){
  }


  ngOnInit(){

  }

}
