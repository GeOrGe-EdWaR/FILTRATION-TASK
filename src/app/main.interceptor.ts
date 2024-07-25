import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const BaseUrl = 'https://dummyapi.io/data/v1/user/';

    let NewRequest = request.clone({
      url: request.url.includes('assets') ? request.url : BaseUrl + request.url,
      setHeaders: {
        'app-id': '64fc4a747b1786417e354f31',
      },
    });

    return next.handle(NewRequest);
  }
}
