import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../services/user-auth';

export const loginProtectedGuard: CanActivateFn = (route, state) => {
  const userAuth = inject(UserAuth);
  const router = inject(Router);

  if (userAuth.isLoggedIn && (state.url === '/login' || state.url === '/signUp')) {
    router.navigate(['/home']);
    return false;
  }

  return true;
};
