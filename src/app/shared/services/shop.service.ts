import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Straw } from '../../straws/straw.model';
import { Subject, Observable } from 'rxjs';
import { Flute } from '../../flutes/flute.model';
import { Protector } from 'src/app/protectors/protector.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private _strawSubject: Subject<Straw[]> = new Subject<Straw[]>(); 
  private _fluteSbject: Subject<Flute[]> = new Subject<Flute[]>(); 
  private _protectorsSubject: Subject<Protector[]> = new Subject<Protector[]>(); 

  constructor(private http: HttpClient) { }

  getStraws():void{
    const strawsUrl:string = environment.strawsApiUrl;
    this.http.get<{straws:Straw[]}>(strawsUrl).subscribe(res=>{
      this._strawSubject.next(res.straws);
    });
  }

  getFlutes():void{
    const flutesUrl:string = environment.flutesApiUrl;
    this.http.get<{flutes:Flute[]}>(flutesUrl).subscribe(res=>{
      this._fluteSbject.next(res.flutes);
    });
  }

  getProtectors():void{
    const protectorsUrl:string = environment.protectorsApiUrl;
    this.http.get<{protectors:Protector[]}>(protectorsUrl).subscribe(res=>{
      this._protectorsSubject.next(res.protectors)
    })
  }

  get strawSubject():Observable<Straw[]>{
    return this._strawSubject.asObservable();
  }

  get flutesSubject():Observable<Flute[]>{
    return this._fluteSbject.asObservable()
  }

  get protectorsSubject():Observable<Protector[]>{
    return this._protectorsSubject.asObservable()
  }
}
