import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private _prodSubject: Subject<Product[]> = new Subject<Product[]>(); 
  constructor(private http: HttpClient) { }

  getProducts():void{
    const productsUrl:string = environment.productsApiUrl;
    this.http.get<{products:Product[]}>(productsUrl).subscribe(res=>{
      this._prodSubject.next(res.products);
    });
  }


  get prodSubject():Observable<Product[]>{
    return this._prodSubject.asObservable();
  }
}
