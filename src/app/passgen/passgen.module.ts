import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCommonModule } from '@angular/material/core';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassgenRoutingModule } from './passgen-routing.module';
import { PasswordComponent } from './password/password.component';
import { PassphraseComponent } from './passphrase/passphrase.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    PasswordComponent,
    PassphraseComponent
  ],
  imports: [
    CommonModule,
    PassgenRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  exports: [MatFormFieldModule, MatInputModule]
})
export class PassgenModule { }
