import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ResponseEntity from '../Interfaces/ResponseEntity';
import LoginCredentials from '../Interfaces/loginCredentials';
import IUser from '../Interfaces/IUser';
import registrationCredentials from '../Interfaces/registrationCredentials';

@Injectable({
  providedIn: 'root',
})
export class UserAuth {
  private initialData: IUser = {
    name: '',
    email: '',
    role: 'user',
    refreshToken: '',
    accessToken: '',
  };
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/api/auth';
  private userProfile = new BehaviorSubject<IUser>(this.initialData);
  userProfile$ = this.userProfile.asObservable();

  private hasToken(): boolean {
    return !!localStorage.getItem('userToken');
  }
  private authStatus = new BehaviorSubject<boolean>(this.hasToken());
  authStatus$ = this.authStatus.asObservable();

  get isLoggedIn(): boolean {
    return this.authStatus.value;
  }

  login(credentials: LoginCredentials): void {
    this.http.post<ResponseEntity>(`${this.apiUrl}/signin`, credentials).subscribe({
      next: (response) => {
        this.userProfile.next(response.data);
        this.authStatus.next(true);
        localStorage.setItem('userToken', `Bearer ${response.data.accessToken}`);
        // localStorage.setItem('refreshToken', response.data.refreshToken);
      },
      error: (err) => console.error(err.message),
    });
  }
  register(registrationCredentials: registrationCredentials): void {
    this.http.post<ResponseEntity>(`${this.apiUrl}/signup`, registrationCredentials).subscribe({
      next: (response): void => {
        this.userProfile.next(response.data);
        this.authStatus.next(true);
        localStorage.setItem('userToken', `Bearer ${response.data.accessToken}`);
        // localStorage.setItem('refreshToken', response.data.refreshToken);
      },
      error: (err): void => console.error(err.message),
    });
  }
  logout(): void {
    this.http
      .post<ResponseEntity>(
        `${this.apiUrl}/logout`,
        {}, // body of the request
        { headers: { authorization: `${localStorage.getItem('userToken')}` } }
      )
      .subscribe({
        next: () => {
          this.authStatus.next(false);
          this.userProfile.next(this.initialData);
          localStorage.removeItem('userToken');
        },
        error: (err) => console.error(err.message),
      });
  }
}
