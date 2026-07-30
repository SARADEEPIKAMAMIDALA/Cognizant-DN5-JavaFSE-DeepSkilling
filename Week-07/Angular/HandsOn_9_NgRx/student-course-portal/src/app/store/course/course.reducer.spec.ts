import { courseReducer, initialCourseState } from './course.reducer';
import { loadCourses, loadCoursesFailure, loadCoursesSuccess } from './course.actions';

describe('courseReducer', () => {
  it('sets loading true on loadCourses', () => {
    const state = courseReducer(initialCourseState, loadCourses());
    expect(state.loading).toBeTrue();
  });

  it('stores courses and clears loading on success', () => {
    const courses = [{ id: 1, name: 'X', code: 'X1', credits: 3, gradeStatus: 'passed' as const }];
    const state = courseReducer(initialCourseState, loadCoursesSuccess({ courses }));
    expect(state.courses).toEqual(courses);
    expect(state.loading).toBeFalse();
  });

  it('stores error and clears loading on failure', () => {
    const state = courseReducer(initialCourseState, loadCoursesFailure({ error: 'boom' }));
    expect(state.error).toBe('boom');
    expect(state.loading).toBeFalse();
  });
});
