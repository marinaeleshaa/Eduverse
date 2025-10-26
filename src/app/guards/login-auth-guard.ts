import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../services/user-auth';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  const userAuth = inject(UserAuth);
  const router = inject(Router);


  if (!userAuth.isLoggedIn) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
