import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassphraseComponent } from './passphrase/passphrase.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [{
  path: 'passphrase',
  component: PassphraseComponent,
},
{
  path: 'password',
  component: PasswordComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassgenRoutingModule { }
