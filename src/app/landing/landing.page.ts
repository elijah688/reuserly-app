import { Component, OnInit, ViewChild, AfterViewChecked, ElementRef, ViewChildren, QueryList, AfterContentInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { links, StoreLink, SocialLink } from '../shared/links/links';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.sass'],
})
export class LandingPage implements OnInit, AfterViewChecked, AfterViewInit {
  // stores = [
  //   {
  //     'title': 'Straws',
  //     'icon': 'color-wand',
  //     'link' : '/straws',
  //     'color': '#E63135'
  //   },
  //   {
  //     'title': 'Protectors',
  //     'icon': 'phone-portrait',
  //     'link' : '/protectors',
  //     'color': '#0CA9EA'
  //   },
  //   {
  //     'title': 'Flutes',
  //     'icon': 'wine',
  //     'link' : '/flutes',
  //     'color': '#b76e79'
  //   },
  //   {
  //     'title': 'Reuserly Books',
  //     'icon': 'book',
  //     'link' : '/books',
  //     'color': '#F46529'
  //   },
  // ];

  // socials = [
  //   {
  //     'icon': 'logo-twitter',
  //     'link' : 'https://mobile.twitter.com/reuserly',
  //   },
  //   {
  //     'icon': 'logo-instagram',
  //     'link' : 'https://www.instagram.com/reuserly/?hl=en',
  //   },
  //   {
  //     'icon': 'logo-facebook',
  //     'link' : 'https://www.facebook.com/Reuserly/',
  //   },
  //   {
  //     'icon': 'cart',
  //     'link' : 'https://www.amazon.co.uk/s?i=merchant-items&me=AXZZLUOFE5VAI&dc&qid=1577594775&ref=sr_nr_p_4_1',
  //   },
  // ];

  stores:StoreLink[] = links.stores
  socials:SocialLink[] = links.socials

  @ViewChild('bannerTitle', {static:false}) bannerTitle:ElementRef
  @ViewChild('backdrop', {static:false}) backdrop:ElementRef 


  @ViewChild('protectorCardImage', {static:false}) protectorCardImage:ElementRef
  protectorCardVisible:boolean = false; 


  @ViewChild('fluteCardImage', {static:false}) fluteCardImage:ElementRef
  fluteCardVisible:boolean = false; 

  @ViewChild('reuserlyBooksBanner', {static:false}) reuserlyBooksBanner:ElementRef
  bookCardVisible:boolean = false; 
  

  
  isTitleVisible:boolean;
  scrollTop:number;
  strawCardVisible:boolean = false;


  constructor(private cdr: ChangeDetectorRef) { }
  

  ngOnInit() {
    setTimeout(() => {
      this.strawCardVisible = true;
    }, 500);

  }

  ngAfterViewInit(): void {
   

  }

  ngAfterViewChecked(): void {
    this.bannerTitle.nativeElement.style.transform = `translateY(${this.scrollTop/5}%)`
    this.backdrop.nativeElement.style.opacity = `${this.scrollTop/5}%`

    this.handleCardAnimations();
    
    this.cdr.detectChanges();

  }

  private handleCardAnimations():void{
    const protectorCardOffset:number = this.protectorCardImage.nativeElement.getBoundingClientRect().top; 
    if(protectorCardOffset!==0 && protectorCardOffset<725){
      this.protectorCardVisible = true;
    }


    const fluteCardOffset:number = this.fluteCardImage.nativeElement.getBoundingClientRect().top; 
    if(fluteCardOffset!==0 && fluteCardOffset<800){
      this.fluteCardVisible = true;
    }

    const reuserlyBooksBannerOffset:number = this.reuserlyBooksBanner.nativeElement.getBoundingClientRect().top; 
    if(reuserlyBooksBannerOffset!==0 && reuserlyBooksBannerOffset<250){
      this.bookCardVisible = true;
    }

  }

  logScroll(event:CustomEvent){
    this.scrollTop = event.detail.scrollTop;
  }
}
