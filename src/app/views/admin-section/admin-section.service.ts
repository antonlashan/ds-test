import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../../models/user.model';

@Injectable()
export class AdminSectionService {
  constructor(private http: HttpClient) {}

  users() {
    return this.http.get<User[]>('users').pipe();
  }
}
