import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from './books.model';
import { StoreLink, links, SocialLink } from '../shared/links/links';
import { ShopService } from '../shared/services/shop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['../shared/product.template/product.sass', './books.page.sass'],
})
export class BooksPage implements OnInit, OnDestroy {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  private bookSub:Subscription = new Subscription();
  

  products:Book[];
  stores:StoreLink[] = links.stores
  socials:SocialLink[] = links.socials

  constructor(private shopServ:ShopService) { }

  ngOnInit() {
    this.shopServ.getBooks()
    this.bookSub = this.shopServ.bookSubject.subscribe(books=>{
      this.products = books;
    })
  }

  ngOnDestroy(): void {
    this.bookSub.unsubscribe()
  }

}
