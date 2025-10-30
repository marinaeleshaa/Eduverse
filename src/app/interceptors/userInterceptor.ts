import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

// todo => example for logout in user-auth service

export const UserInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const token = localStorage.getItem('userToken');

  let modifiedReq = req;
  if (req.method === 'POST' && req.url === 'http://localhost:3000/api/auth/logout') {
    modifiedReq = req.clone({
      headers: req.headers.set('authorization', `${token}`),
    });
  }
  // console.log(modifiedReq)

  return next(modifiedReq);
};
