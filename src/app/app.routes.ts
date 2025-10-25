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

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: 'courses', component: CoursesDash },
    ],
    canActivate:[dashboardGuard]
  },
  { path: 'home', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'courses', component: CoursesMainPage,
    children: [
      { path: '', redirectTo: 'allcourses', pathMatch: 'full' },
      { path: 'allcourses', component:  CoursesPage},
      { path: ':courseId', component: CoursedetailsPage },
    ],
    canActivate:[loginAuthGuard]
   },
  {
    path: 'roadmap',
    component: RoadmapMainPage,
    children: [
      { path: '', redirectTo: 'tracks', pathMatch: 'full' },
      { path: 'tracks', component: TracksPage },
      {path: 'courses',component: RoadmapCoursesPage},
      { path: ':courseId', component: RoadmapCoursedetailsPage },
    ],
    canActivate:[loginAuthGuard]
  },
  { path: 'login', component: LoginPage , canActivate:[loginProtectedGuard]},
  { path: 'signUp', component: SignUpPage , canActivate:[loginProtectedGuard]},
  { path: '**', component: NotFoundPage },
];
