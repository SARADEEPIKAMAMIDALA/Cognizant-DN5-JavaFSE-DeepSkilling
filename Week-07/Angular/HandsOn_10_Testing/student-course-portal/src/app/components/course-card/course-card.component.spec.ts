import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseCardComponent } from './course-card.component';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectEnrolledIds, value: [] }]
        })
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the course name from @Input', () => {
    component.course = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' };
    component.ngOnChanges({ course: {} as any });
    fixture.detectChanges();
    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3.textContent).toContain('Data Structures');
  });

  it('should emit enrollRequested with the course id on Enroll click', () => {
    component.course = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' };
    component.ngOnChanges({ course: {} as any });
    fixture.detectChanges();
    spyOn(component.enrollRequested, 'emit');
    fixture.debugElement.query(By.css('button')).nativeElement.click();
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  it('should toggle isExpanded when Show Details is clicked', () => {
    component.course = { id: 3, name: 'DB', code: 'CS103', credits: 3, gradeStatus: 'failed' };
    component.ngOnChanges({ course: {} as any });
    fixture.detectChanges();
    expect(component.isExpanded).toBeFalse();
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[1].nativeElement.click(); // second button = Show Details
    expect(component.isExpanded).toBeTrue();
  });

  it('should log previous/current values in ngOnChanges', () => {
    const logSpy = spyOn(console, 'log');
    component.course = { id: 2, name: 'OS', code: 'CS102', credits: 3, gradeStatus: 'pending' };
    component.ngOnChanges({
      course: { previousValue: undefined, currentValue: component.course, firstChange: true, isFirstChange: () => true }
    } as any);
    expect(logSpy).toHaveBeenCalled();
  });
});
