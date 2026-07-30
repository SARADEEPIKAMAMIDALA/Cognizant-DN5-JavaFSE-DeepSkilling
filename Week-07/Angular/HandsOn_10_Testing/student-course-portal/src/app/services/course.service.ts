import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, retry, switchMap, tap, throwError } from 'rxjs';
import { Course } from '../models/course.model';

const API_URL = 'http://localhost:3000/courses';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(API_URL).pipe(
      map((courses) => courses.filter((c) => c.credits > 0)),
      // tap is for side effects (logging) only - it must never mutate the stream,
      // unlike map which is meant to transform the emitted value.
      tap((courses) => console.log('Courses loaded:', courses.length)),
      retry(2),
      catchError((err) => {
        console.error(err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${API_URL}/${id}`);
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(API_URL, course);
  }

  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${API_URL}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }

  // switchMap cancels the previous inner Observable whenever a new courseId
  // arrives before it completes - prevents an older/slower response from a
  // previously selected course overwriting the currently selected one.
  getStudentsForSelectedCourse(courseId$: Observable<number>): Observable<any> {
    return courseId$.pipe(
      switchMap((courseId) => this.http.get(`http://localhost:3000/enrollments?courseId=${courseId}`))
    );
  }
}
