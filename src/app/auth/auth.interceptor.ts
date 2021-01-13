import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { getActiveUser } from './auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const currUser = getActiveUser();

    let headers = new HttpHeaders();
    if (currUser) {
      headers = headers.append('X-Token', currUser.token);
    }

    const secureReq = request.clone({
      url: environment.endpoint + '/' + request.url,
      headers,
    });

    return next.handle(secureReq);
  }
}
