import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserAuth } from '../../services/user-auth';
import registrationCredentials from '../../Interfaces/registrationCredentials';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sign-up-page',
  imports: [RouterLink, ReactiveFormsModule, FormsModule, AsyncPipe],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.css',
})
export class SignUpPage implements OnInit {
  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(10), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(private userAuthService: UserAuth, private router: Router) {}

  errorMessage!: Observable<string>;
  ngOnInit(): void {
    this.errorMessage = this.userAuthService.errorMessage$;
  }

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

  submit() {
    if (this.signUpForm.valid) {
      const { email, name, password } = this.signUpForm.value;
      this.userAuthService.register({ email, password, name } as registrationCredentials);
      setTimeout(() => {
        if (this.userAuthService.isLoggedIn) {
          this.signUpForm.reset();
          this.router.navigate(['/home']);
        }
      }, 1000);
    }
  }
}
