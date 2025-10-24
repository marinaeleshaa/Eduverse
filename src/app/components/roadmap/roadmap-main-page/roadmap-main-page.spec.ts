import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapMainPage } from './roadmap-main-page';

describe('RoadmapMainPage', () => {
  let component: RoadmapMainPage;
  let fixture: ComponentFixture<RoadmapMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapMainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
