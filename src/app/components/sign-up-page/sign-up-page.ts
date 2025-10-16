import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  imports: [RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.css',
})
export class SignUpPage {
  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(10), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  get emailValid() {
    return this.signUpForm.controls.email.valid;
  }

  get passwordValid() {
    return this.signUpForm.controls.password.valid;
  }
  get confirmPasswordValid() {
    return this.signUpForm.controls.confirmPassword.valid;
  }

  get nameValid() {
    return this.signUpForm.controls.name.valid;
  }

  get emailValue() {
    return this.signUpForm.controls.email.value;
  }
  get passwordValue() {
    return this.signUpForm.controls.password.value;
  }
  get confirmPasswordValue() {
    return this.signUpForm.controls.confirmPassword.value;
  }
  get nameValue() {
    return this.signUpForm.controls.name.value;
  }
  get passwordsMatched() {
    return this.passwordValue === this.confirmPasswordValue;
  }

  submit() {}
}
