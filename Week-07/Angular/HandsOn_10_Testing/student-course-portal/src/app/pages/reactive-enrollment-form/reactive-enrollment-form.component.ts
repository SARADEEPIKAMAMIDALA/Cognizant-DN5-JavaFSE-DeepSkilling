import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

// Custom synchronous validator: disallow course codes starting with "XX".
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (value && String(value).toUpperCase().startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Custom async validator (Promise-based): simulate a "is this email already taken" check.
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const value = (control.value as string) || '';
      resolve(value.includes('test@') ? { emailTaken: true } : null);
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrl: './reactive-enrollment-form.component.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: this.fb.control('', [Validators.required, Validators.email], [simulateEmailCheck]),
      courseId: [null, [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  get additionalCourses(): FormArray {
    // A typed getter avoids repeated `as FormArray` casts scattered across the template.
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Used by the CanDeactivate guard (guards/unsaved-changes.guard.ts) to warn
  // the user before navigating away with unsaved changes.
  canDeactivate(): boolean {
    return !this.enrollForm.dirty;
  }

  onSubmit(): void {
    console.log('enrollForm.value', this.enrollForm.value);
    // .value excludes disabled controls; .getRawValue() includes every control regardless of disabled state.
    console.log('enrollForm.getRawValue()', this.enrollForm.getRawValue());
  }
}
