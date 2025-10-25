import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapCoursesPage } from './roadmap-courses-page';

describe('RoadmapCoursesPage', () => {
  let component: RoadmapCoursesPage;
  let fixture: ComponentFixture<RoadmapCoursesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapCoursesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
