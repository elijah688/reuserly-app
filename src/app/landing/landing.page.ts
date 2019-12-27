import { Component, OnInit, ViewChild, AfterViewChecked, ElementRef } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.sass'],
})
export class LandingPage implements OnInit, AfterViewChecked {
  constructor() { }
  @ViewChild('bannerTitle', {static:false}) bannerTitle:ElementRef 
  isTitleVisible:boolean;
  scrollTop:number;


  ngOnInit() {
  }


  ngAfterViewChecked(): void {
    this.bannerTitle.nativeElement.style.transform = `translateY(${-this.scrollTop}%)`
  }


  logScroll(event:CustomEvent){
    this.scrollTop = event.detail.scrollTop;
  }
}
