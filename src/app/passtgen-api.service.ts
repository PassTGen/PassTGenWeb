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
    return this.http.post<User>(`/api/register/register?email=${user.email}`, '');
  }
  getPassword(passwordreq: PasswordReq) {
    const { auth, capitalize, symbols, length } = passwordreq;
    return this.http.get(`/api/passgen/password?auth=${btoa(auth)}&capitalize=${capitalize}&symbols=${symbols}&length=${length}`, { responseType: "text" });
  }
  getPassphrase(passphrasereq: PassphraseReq) {
    const { auth, length } = passphrasereq;
    return this.http.get(`/api/passgen/passphrase?auth=${btoa(auth)}&length=${length}`, { responseType: "text" });
  }
}
