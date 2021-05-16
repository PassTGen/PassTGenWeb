import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PasswordRequest, PasswordResponse } from './models/password';
import { User } from './models/user';
import { PassphraseReq, PassphraseResponse } from './models/passphrase';

@Injectable({
  providedIn: 'root'
})
export class PasstgenApiService {

  constructor(
    private http: HttpClient
  ) { }

  postUser(user: User) {
    return this.http.post<User>(`/api/register/register?email=${user.email}`, '');
  }
  getPassword(passwordreq: PasswordRequest) {
    const { auth, capitalize, symbols, length } = passwordreq;
    return this.http.get<PasswordResponse>(`/api/passgen/password?auth=${btoa(auth)}&capitalize=${capitalize}&symbols=${symbols}&length=${length}`);
  }
  getPassphrase(passphrasereq: PassphraseReq) {
    const { auth, length } = passphrasereq;
    return this.http.get<PassphraseResponse>(`/api/passgen/passphrase?auth=${btoa(auth)}&length=${length}`);
  }
}

