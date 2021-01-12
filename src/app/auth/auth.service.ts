import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import {
  LoginParams,
  setActiveUser,
  getActiveUser,
  remoreActiveUser,
  User,
} from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate({ email, password }: LoginParams) {
    return this.http
      .post<User>('api/login', { email, password })
      .pipe(
        tap((d) => {
          console.log(d);
          setActiveUser(d);
        })
      );
  }

  deAuthenticate() {
    remoreActiveUser();
  }

  get currUser() {
    return getActiveUser();
  }
}
