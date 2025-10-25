import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../services/user-auth';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const userAuth = inject(UserAuth);
  const router = inject(Router);

  console.log(userAuth.isLoggedIn);

  if (!userAuth.isLoggedIn) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
