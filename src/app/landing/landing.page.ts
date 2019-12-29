import { Component, OnInit, ViewChild, AfterViewChecked, ElementRef } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.sass'],
})
export class LandingPage implements OnInit, AfterViewChecked {
  stores = [
    {
      'title': 'Straws',
      'icon': 'color-wand',
      'link' : '/straws',
      'color': '#E63135'
    },
    {
      'title': 'Protectors',
      'icon': 'phone-portrait',
      'link' : '/protector',
      'color': '#0CA9EA'
    },
    {
      'title': 'Reuserly Books',
      'icon': 'book',
      'link' : '/books',
      'color': '#F46529'
    },
  ];

  socials = [
    {
      'icon': 'logo-twitter',
      'link' : 'https://mobile.twitter.com/reuserly',
    },
    {
      'icon': 'logo-instagram',
      'link' : 'https://www.instagram.com/reuserly/?hl=en',
    },
    {
      'icon': 'logo-facebook',
      'link' : 'https://www.facebook.com/Reuserly/',
    },
    {
      'icon': 'cart',
      'link' : 'https://www.amazon.co.uk/s?i=merchant-items&me=AXZZLUOFE5VAI&dc&qid=1577594775&ref=sr_nr_p_4_1',
    },
  ];


  @ViewChild('bannerTitle', {static:false}) bannerTitle:ElementRef
  @ViewChild('backdrop', {static:false}) backdrop:ElementRef 


  @ViewChild('booksBanner', {static:false}) booksBanner:ElementRef
  @ViewChild('booksLogo', {static:false}) booksLogo:ElementRef 

  isTitleVisible:boolean;
  scrollTop:number;

  constructor() { }
  

  ngOnInit() {
  }


  ngAfterViewChecked(): void {
    this.bannerTitle.nativeElement.style.transform = `translateY(${this.scrollTop/5}%)`
    this.backdrop.nativeElement.style.opacity = `${this.scrollTop/5}%`
   
   
    if(this.scrollTop>=1176){
      const booksScrollTop:number = (this.scrollTop - 1176)/20;

      // this.booksLogo.nativeElement.style.transform = `translateY(${booksScrollTop}%)`
    }
  }


  logScroll(event:CustomEvent){
    this.scrollTop = event.detail.scrollTop;
  }
}
