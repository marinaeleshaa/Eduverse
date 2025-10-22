import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeSlider } from './youtube-slider';

describe('YoutubeSlider', () => {
  let component: YoutubeSlider;
  let fixture: ComponentFixture<YoutubeSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
