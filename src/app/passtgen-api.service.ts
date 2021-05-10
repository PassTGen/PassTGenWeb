import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PassphraseReq, PasswordReq } from './models/password-request';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class PasstgenApiService {

  constructor(
    private http: HttpClient
  ) { }

  postUser(user: User) {
    return this.http.post<User>(`api/register/register?email=${user.email}`, '');
  }
  getPassword(passwordreq: PasswordReq) {
    const { auth, capitalize, symbols, length } = passwordreq;
    return this.http.get<string>(`api/passgen/password?auth=${auth}&capitalize=${capitalize}&symbols=${symbols}&length=${length}`);
  }
  getPassphrase(passphrasereq: PassphraseReq) {
    const { auth, length } = passphrasereq;
    return this.http.get<string>(`api/passgen/passphrase?auth=${auth}&length=${length}`);
  }
}
