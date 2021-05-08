import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassgenRoutingModule } from './passgen-routing.module';
import { PasswordComponent } from './password/password.component';
import { PassphraseComponent } from './passphrase/passphrase.component';


@NgModule({
  declarations: [
    PasswordComponent,
    PassphraseComponent
  ],
  imports: [
    CommonModule,
    PassgenRoutingModule
  ]
})
export class PassgenModule { }
