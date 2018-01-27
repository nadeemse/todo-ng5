import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: any = localStorage.getItem('auth');
    if (token) {
      req.headers.set('Authorization', token);
    }
    const withHeaders = req.clone({ headers: headers });
    // Pass on the cloned request instead of the original request.
    return next.handle(withHeaders);
  }
}
