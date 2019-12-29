import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopService } from '../shop.service';
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
  @ViewChildren('sideImage') sideImages:QueryList<ElementRef<HTMLDivElement>>; 
  @ViewChildren('sideImageTitle') sideImageTitles:QueryList<ElementRef<HTMLHeadingElement>>; 
  
  private strawsSub:Subscription = new Subscription();
  straws:Straw[];
  scrollTop:number;

  constructor(private shopServ:ShopService) { }

  ngOnInit():void {
    this.shopServ.getStraws();
    this.strawsSub = this.shopServ.strawSubject.subscribe(strwas=>{
      this.straws = strwas;
      console.log(this.straws)
    })   
  }

  ngAfterViewChecked(): void {
    if(this.sideImages.length!==0){
      this.sideImages.forEach((e,i)=>{
        e.nativeElement.style.backgroundPosition = `${(-this.scrollTop/(i+1))}px`
      })
      // this.sideImageTitles.forEach(e,i)=>{
      //   e.nativeElement.style.backgroundPosition = `${(-this.scrollTop/(i+1))}px`
      // })
    }
  }
  ngOnDestroy(): void {
    this.strawsSub.unsubscribe()
  }

  hasNumber(color:string) {
    return /\d/.test(color);
  }

  logScroll(event:CustomEvent){
    this.scrollTop = event.detail.scrollTop;
  }

}
