import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent, CardCourse } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: CardCourse[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4 },
    { id: 2, name: 'Operating Systems', code: 'CS102', credits: 3 },
    { id: 3, name: 'Database Systems', code: 'CS103', credits: 3 },
    { id: 4, name: 'Computer Networks', code: 'CS104', credits: 4 },
    { id: 5, name: 'Web Development', code: 'CS105', credits: 3 }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
