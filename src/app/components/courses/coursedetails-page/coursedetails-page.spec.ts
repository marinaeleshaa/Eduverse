import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedetailsPage } from './coursedetails-page';

describe('CoursedetailsPage', () => {
  let component: CoursedetailsPage;
  let fixture: ComponentFixture<CoursedetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursedetailsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
