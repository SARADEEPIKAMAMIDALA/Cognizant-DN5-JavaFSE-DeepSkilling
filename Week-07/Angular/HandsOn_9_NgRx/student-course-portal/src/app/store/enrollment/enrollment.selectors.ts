import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';
import { selectAllCourses } from '../course/course.selectors';

export const selectEnrollmentState = createFeatureSelector<EnrollmentState>('enrollment');

export const selectEnrolledIds = createSelector(selectEnrollmentState, (state) => state.enrolledCourseIds);

// Cross-slice selector: combines the course slice with the enrollment slice
// to derive full Course objects for the enrolled ids, without duplicating data.
export const selectEnrolledCourses = createSelector(
  selectAllCourses,
  selectEnrolledIds,
  (courses, ids) => courses.filter((c) => ids.includes(c.id))
);
