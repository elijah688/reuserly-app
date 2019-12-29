import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Straw } from './straws/straw.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private _strawSubject: Subject<Straw[]> = new Subject<Straw[]>(); 
  constructor(private http: HttpClient) { }

  getStraws():void{
    const strawsUrl:string = environment.strawsApiUrl;
    this.http.get<{straws:Straw[]}>(strawsUrl).subscribe(res=>{
      this._strawSubject.next(res.straws);
    });
  }


  get strawSubject():Observable<Straw[]>{
    return this._strawSubject.asObservable();
  }
}
