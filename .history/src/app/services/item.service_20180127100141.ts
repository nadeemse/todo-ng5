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

  getLogById(id): Observable<any> {
    return this.http.get(`/api/pos-logs/${id}`);
  }

  deleteLog(log): Observable<any> {
    return this.http.delete(`/api/pos-logs/${log._id}`);
  }

}
