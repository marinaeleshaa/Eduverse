import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuth {
  private hasToken(): boolean {
    return !!localStorage.getItem('userToken');
  }
  private authStatus = new BehaviorSubject<boolean>(this.hasToken());
  authStatus$ = this.authStatus.asObservable();

  get isLoggedIn(): boolean {
    return this.authStatus.value;
  }

  login(): void {
    this.authStatus.next(true);
    localStorage.setItem('userToken', 'jskjnslkdmclamckaocscjacj');
  }
  logout(): void {
    this.authStatus.next(false);
    localStorage.removeItem('userToken');
  }
}
