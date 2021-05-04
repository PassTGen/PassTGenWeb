import { Injectable } from '@angular/core';
import { PassphraseReq, PasswordReq } from './models/password-request';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class PasstgenApiService {

  constructor() { }

  postUser(user: User) { }
  getPassword(passwordreq: PasswordReq) { }
  getPassphrase(passphrasereq: PassphraseReq) { }
}
