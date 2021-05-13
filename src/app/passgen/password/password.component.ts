import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordReq, symbols } from 'src/app/models/password-request';
import { MyErrorStateMatcher } from 'src/app/my-error.matcher';
import { PasstgenApiService } from 'src/app/passtgen-api.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  requestForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    length: ['4'],
    capitalize: [true],
    symbols: ["AlphaNumeric"]
  });
  matcher = new MyErrorStateMatcher();
  message?: string;
  symbols = symbols;
  constructor(
    private passtgenService: PasstgenApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  onSubmit() {
    const request: PasswordReq = this.requestForm.value;
    this.passtgenService.getPassword(request).subscribe(
      (password: string) => {
        this.message = `password: ${password}`;
      },
      (err: HttpErrorResponse) => {
        this.message = `There has been some kind of error creating the user: ${err.message}`;
      });
  }
}
