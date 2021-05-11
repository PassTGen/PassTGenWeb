import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { User } from '../models/user';
import { MyErrorStateMatcher } from '../my-error.matcher';
import { PasstgenApiService } from '../passtgen-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  message?: string;

  constructor(
    private passtgenService: PasstgenApiService
  ) { }

  ngOnInit(): void {
  }

  onSignUp() {
    const user: User = {
      email: this.emailFormControl.value
    };
    this.message = "loading...";
    this.passtgenService.postUser(user).subscribe(
      (user: User) => {
        this.message = `The user "${user.email}" has been created.`;
      },
      (err: HttpErrorResponse) => {
        this.message = `There has been some kind of error creating the user: ${err.message}`;
      }
    );
  }
}
