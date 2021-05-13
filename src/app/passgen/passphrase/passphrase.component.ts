import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PassphraseReq } from 'src/app/models/password-request';
import { MyErrorStateMatcher } from 'src/app/my-error.matcher';
import { PasstgenApiService } from 'src/app/passtgen-api.service';

@Component({
  selector: 'app-passphrase',
  templateUrl: './passphrase.component.html',
  styleUrls: ['./passphrase.component.css']
})
export class PassphraseComponent implements OnInit {

  requestForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    length: ['4']
  });
  matcher = new MyErrorStateMatcher();
  message?: string;
  constructor(
    private passtgenService: PasstgenApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void { }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  onSubmit() {
    const request: PassphraseReq = this.requestForm.value;
    this.passtgenService.getPassphrase(request).subscribe(
      (passphrase: string) => {
        this.message = `passphrase: ${passphrase}`;
      },
      (err: HttpErrorResponse) => {
        this.message = `There has been some kind of error creating the user: ${err.message}`;
      });
  }
}
