import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEntity } from '../models/ientity';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends IEntity> {

  protected items : T[] = [];

  constructor() { }

  public getItem(id: number) : Observable<T> {
    var result = this.items[0]; 
    return of(result);
  }

  public getItems() : Observable<T[]> {
    return of(this.items);
  }

  public addItem(item: T) : Observable<any> {
    this.items.push(item);
    return of();
  }

  public deleteItem(id: number) : Observable<any> {
    this.items = this.items.filter(g => g.Id != id);
    return of();
  }
}
