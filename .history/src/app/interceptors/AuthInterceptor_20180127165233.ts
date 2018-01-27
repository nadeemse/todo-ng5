import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    const token: any = localStorage.getItem('token');
    if (token) {
      
      const headers = req.headers.set('Authorization', 'Bearer ' + token);
      const withHeaders = req.clone({ headers: headers });
    // Pass on the cloned request instead of the original request.
    return next.handle(withHeaders);
    } else {
        return next.handle(req);
    }
  }
}
