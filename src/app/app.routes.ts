import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { AboutPage } from './components/about-page/about-page';
import { NotFoundPage } from './components/not-found-page/not-found-page';
import { LoginPage } from './components/login-page/login-page';
import { SignUpPage } from './components/sign-up-page/sign-up-page';
import { Dashboard } from './components/dashboard/dashboard';
import { RoadmapMainPage } from './components/roadmap/roadmap-main-page/roadmap-main-page';
import { TracksPage } from './components/roadmap/tracks-page/tracks-page';
import { CoursesPage } from './components/roadmap/courses-page/courses-page';
import { CoursedetailsPage } from './components/roadmap/coursedetails-page/coursedetails-page';
import { CoursesDash } from './components/dashboard/dashboard sections/courses-dash/courses-dash';

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
  {
    path: 'roadmap',
    component: RoadmapMainPage,
    children: [
      { path: '', redirectTo: 'tracks', pathMatch: 'full' },
      { path: 'tracks', component: TracksPage },
      {path: 'courses',component: CoursesPage},
      { path: 'courseId', component: CoursedetailsPage },
    ],
  },
  { path: 'login', component: LoginPage },
  { path: 'signUp', component: SignUpPage },
  { path: '**', component: NotFoundPage },
];
