import { TestBed } from '@angular/core/testing';
import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCourses returns the seeded course list', () => {
    expect(service.getCourses().length).toBe(5);
  });

  it('addCourse appends a new course', () => {
    service.addCourse({ id: 99, name: 'Test', code: 'X99', credits: 2, gradeStatus: 'pending' });
    expect(service.getCourses().length).toBe(6);
  });
});
