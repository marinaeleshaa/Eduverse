import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapCoursedetailsPage } from './roadmap-coursedetails-page';

describe('RoadmapCoursedetailsPage', () => {
  let component: RoadmapCoursedetailsPage;
  let fixture: ComponentFixture<RoadmapCoursedetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapCoursedetailsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapCoursedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
