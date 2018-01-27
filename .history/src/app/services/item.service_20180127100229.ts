import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>  {
    return this.http.get(environment + 'items');
  }

  getItem(item): Observable<any> {
    return this.http.get(environment + `items/${item.id}`);
  }

  deleteItem(item): Observable<any> {
    return this.http.delete(environment + `items/${item.id}`);
  }

  updateItem(item): Observable<any> {
    return this.http.put(environment + `items/${item.id}`, item);
  }

  updateItem(item): Observable<any> {
    return this.http.put(environment + `items/${item.id}`, item);
  }

}
