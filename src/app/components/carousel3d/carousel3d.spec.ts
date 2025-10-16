import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel3d } from './carousel3d';

describe('Carousel3d', () => {
  let component: Carousel3d;
  let fixture: ComponentFixture<Carousel3d>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carousel3d]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carousel3d);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
