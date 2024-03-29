import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/email.error-state-matcher';
import { PassphraseReq, PassphraseResponse } from 'src/app/models/passphrase';
import { PasstgenApiService } from 'src/app/passtgen-api.service';

@Component({
  selector: 'app-passphrase',
  templateUrl: './passphrase.component.html',
  styleUrls: ['./passphrase.component.css']
})
export class PassphraseComponent implements OnInit {

  requestForm = this.fb.group({
    auth: ['', [
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

  onSubmit() {
    const request: PassphraseReq = this.requestForm.value;
    this.passtgenService.getPassphrase(request).subscribe(
      (passphrase: PassphraseResponse) => {
        this.message = passphrase.passphrase;
      },
      (err: HttpErrorResponse) => {
        this.message = `There has been some kind of error creating passphrase: ${err.message}`;
      });
  }
}
