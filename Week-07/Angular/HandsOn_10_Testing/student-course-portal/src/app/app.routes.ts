import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'profile', component: StudentProfileComponent, canActivate: [authGuard] },

  // Lazy-loaded routes (standalone equivalent of loadChildren -> NgModule):
  // each loadComponent() import() only downloads its chunk the first time the
  // route is visited - check DevTools > Network to see the separate JS chunk.
  {
    path: 'enroll',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/enrollment-form/enrollment-form.component').then((m) => m.EnrollmentFormComponent)
  },
  {
    path: 'enroll-reactive',
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard],
    loadComponent: () =>
      import('./pages/reactive-enrollment-form/reactive-enrollment-form.component').then(
        (m) => m.ReactiveEnrollmentFormComponent
      )
  },

  // Wildcard MUST be last - Angular matches routes in order.
  { path: '**', component: NotFoundComponent }
];
