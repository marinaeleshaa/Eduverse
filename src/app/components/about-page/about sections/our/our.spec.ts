import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Our } from './our';

describe('Our', () => {
  let component: Our;
  let fixture: ComponentFixture<Our>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Our]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Our);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
