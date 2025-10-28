import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { UserAuth } from '../../services/user-auth';
import LoginCredentials from '../../Interfaces/loginCredentials';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  userData!: {
    email: string;
    password: string;
  };

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
  });

  constructor(private userAuthService: UserAuth, private router: Router) {}

  get emailValid() {
    return this.loginForm.controls.email.valid;
  }

  get passwordValid() {
    return this.loginForm.controls.password.valid;
  }

  get emailValue() {
    return this.loginForm.controls.email.value;
  }
  get passwordValue() {
    return this.loginForm.controls.password.value;
  }

  loginUser() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.userAuthService.login({ email, password } as LoginCredentials);
      this.loginForm.reset();
      this.router.navigate(['/home']);
    }
  }
}
