import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { AboutPage } from './components/about-page/about-page';
import { ServicesPage } from './components/services-page/services-page';
import { NotFoundPage } from './components/not-found-page/not-found-page';
import { LoginPage } from './components/login-page/login-page';
import { SignUpPage } from './components/sign-up-page/sign-up-page';
import { Dashboard } from './components/dashboard/dashboard';
import { CoursesDash } from './components/courses-dash/courses-dash';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: 'courses', component: CoursesDash },
    ],
  },
  { path: 'home', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'services', component: ServicesPage },
  { path: 'login', component: LoginPage },
  { path: 'signUp', component: SignUpPage },
  { path: '**', component: NotFoundPage },
];
