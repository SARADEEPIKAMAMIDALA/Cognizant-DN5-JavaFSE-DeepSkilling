import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { Course } from '../../models/course.model';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;
  isEnrolled$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('course changed - previous:', changes['course'].previousValue, 'current:', changes['course'].currentValue);
      this.isEnrolled$ = this.store.select(selectEnrolledIds).pipe(
        map((ids) => ids.includes(this.course?.id))
      );
    }
  }

  onEnrollClick(isEnrolled: boolean): void {
    if (isEnrolled) {
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
    } else {
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
    }
    this.enrollRequested.emit(this.course.id);
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  get borderStyle(): { [key: string]: string } {
    const colors: Record<string, string> = { passed: 'green', failed: 'red', pending: 'grey' };
    return { 'border-left': `4px solid ${colors[this.course?.gradeStatus] || 'grey'}` };
  }

  cardClasses(isEnrolled: boolean): { [key: string]: boolean } {
    return {
      'card--enrolled': isEnrolled,
      'card--full': (this.course?.credits ?? 0) >= 4,
      expanded: this.isExpanded
    };
  }
}
