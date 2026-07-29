import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  ngOnInit(): void {
    // ngOnInit fires once, after inputs are set - the right place for data fetching (constructor fires too early).
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  // [property] = one-way binding: component -> DOM only (e.g. [disabled]).
  // [(ngModel)] = two-way binding: DOM <-> component; it is shorthand for
  // [ngModel]="prop" (ngModelChange)="prop = $event".
}
