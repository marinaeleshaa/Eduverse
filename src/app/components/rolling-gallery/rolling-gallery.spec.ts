import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingGallery } from './rolling-gallery';

describe('RollingGallery', () => {
  let component: RollingGallery;
  let fixture: ComponentFixture<RollingGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollingGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollingGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
