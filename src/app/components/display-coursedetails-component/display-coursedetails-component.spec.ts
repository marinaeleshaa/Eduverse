import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCoursedetailsComponent } from './display-coursedetails-component';

describe('DisplayCoursedetailsComponent', () => {
  let component: DisplayCoursedetailsComponent;
  let fixture: ComponentFixture<DisplayCoursedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCoursedetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCoursedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
