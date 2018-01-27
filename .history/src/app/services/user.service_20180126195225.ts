import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  register(user): Observable<any> {
    return this.http.post(environment.API_ENDPOINT + '/users/sign-up', JSON.stringify(user));
  }

  login(credentials): Observable<any> {
    return this.http.post( environment.API_ENDPOINT + 'login', JSON.stringify(credentials));
  }


}
