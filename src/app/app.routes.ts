import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { AboutPage } from './components/about-page/about-page';
import { NotFoundPage } from './components/not-found-page/not-found-page';
import { LoginPage } from './components/login-page/login-page';
import { SignUpPage } from './components/sign-up-page/sign-up-page';
import { Dashboard } from './components/dashboard/dashboard';
import { RoadmapMainPage } from './components/roadmap/roadmap-main-page/roadmap-main-page';
import { TracksPage } from './components/roadmap/tracks-page/tracks-page';
import { CoursedetailsPage } from './components/courses/coursedetails-page/coursedetails-page';
import { CoursesMainPage } from './components/courses/courses-main-page/courses-main-page';
import { RoadmapCoursesPage } from './components/roadmap/roadmap-courses-page/roadmap-courses-page';
import { CoursesPage } from './components/courses/courses-page/courses-page';
import { CoursesDash } from './components/dashboard/dashboard sections/courses-dash/courses-dash';
import { loginAuthGuard } from './guards/login-auth-guard';
import { RoadmapCoursedetailsPage } from './components/roadmap/roadmap-coursedetails-page/roadmap-coursedetails-page';
import { loginProtectedGuard } from './guards/login-protected-guard';
import { dashboardGuard } from './guards/dashboardGuard';
import { WatchLaterPage } from './components/watch-later-page/watch-later-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard').then((m) => m.Dashboard),
    children: [
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: 'courses', component: CoursesDash },
    ],
    canActivate: [dashboardGuard],
  },
  { path: 'home', component: HomePage },
  {
    path: 'about',
    loadComponent: () => import('./components/about-page/about-page').then((m) => m.AboutPage),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./components/courses/courses-main-page/courses-main-page').then(
        (m) => m.CoursesMainPage
      ),
    children: [
      { path: '', redirectTo: 'allcourses', pathMatch: 'full' },
      { path: 'allcourses', component: CoursesPage },
      { path: ':courseId', component: CoursedetailsPage },
    ],
  },
  {
    path: 'roadmap',
    loadComponent: () =>
      import('./components/roadmap/roadmap-main-page/roadmap-main-page').then(
        (m) => m.RoadmapMainPage
      ),
    children: [
      { path: '', redirectTo: 'tracks', pathMatch: 'full' },
      { path: 'tracks', component: TracksPage },
      { path: 'courses', component: RoadmapCoursesPage },
      { path: ':courseId', component: RoadmapCoursedetailsPage },
    ],
    canActivate: [loginAuthGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login-page/login-page').then((m) => m.LoginPage),
    canActivate: [loginProtectedGuard],
  },
  {
    path: 'signUp',
    loadComponent: () => import('./components/sign-up-page/sign-up-page').then((m) => m.SignUpPage),
    canActivate: [loginProtectedGuard],
  },
  {
    path: 'watch-later',
    loadComponent: () =>
      import('./components/watch-later-page/watch-later-page').then((m) => m.WatchLaterPage),
    canActivate: [dashboardGuard],
  },
  { path: '**', component: NotFoundPage },
];
