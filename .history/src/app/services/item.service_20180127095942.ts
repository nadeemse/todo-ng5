import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class PosLogsService {

  constructor(private http: HttpClient) { }

  getLogs(params: any): Observable<any>  {
    return this.http.post('/api/pos-logs', params);
  }

  getLog(log): Observable<any> {
    return this.http.get(`/api/pos-logs/${log._id}`);
  }

  getLogById(id): Observable<any> {
    return this.http.get(`/api/pos-logs/${id}`);
  }

  deleteLog(log): Observable<any> {
    return this.http.delete(`/api/pos-logs/${log._id}`);
  }

}
