import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private content = new BehaviorSubject<string>(" Type ");
  public share = this.content.asObservable();

  constructor() { }
  
    updateData(event:any){
      this.content.next(event.target.value);
    }
   
}
