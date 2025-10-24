import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesMainPage } from './courses-main-page';

describe('CoursesMainPage', () => {
  let component: CoursesMainPage;
  let fixture: ComponentFixture<CoursesMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesMainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
