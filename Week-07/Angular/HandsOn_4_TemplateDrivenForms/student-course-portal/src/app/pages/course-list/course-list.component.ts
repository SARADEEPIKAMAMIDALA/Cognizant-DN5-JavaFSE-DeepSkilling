import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent, CardCourse } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  isLoading = true;

  courses: CardCourse[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed', enrolled: true },
    { id: 2, name: 'Operating Systems', code: 'CS102', credits: 3, gradeStatus: 'pending', enrolled: false },
    { id: 3, name: 'Database Systems', code: 'CS103', credits: 3, gradeStatus: 'failed', enrolled: false },
    { id: 4, name: 'Computer Networks', code: 'CS104', credits: 4, gradeStatus: 'pending', enrolled: false },
    { id: 5, name: 'Web Development', code: 'CS105', credits: 3, gradeStatus: 'passed', enrolled: true }
  ];

  selectedCourseId: number | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // trackBy avoids re-rendering every card on array changes -- Angular only
  // patches the DOM for items whose id actually changed, instead of
  // destroying/recreating every CourseCardComponent instance.
  trackByCourseId(index: number, course: CardCourse): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
