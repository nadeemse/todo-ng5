import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    const headers = req.headers.set('Content-Type', 'application/json')
                      .set('charset', 'UTF-8');
    const token: any = localStorage.getItem('token');
    if (token) {
      headers.set(''Content-Type', 'application/json'');
    }
    const withHeaders = req.clone({ headers: headers });
    // Pass on the cloned request instead of the original request.
    return next.handle(withHeaders);
  }
}
