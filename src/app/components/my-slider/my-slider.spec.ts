import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySlider } from './my-slider';

describe('MySlider', () => {
  let component: MySlider;
  let fixture: ComponentFixture<MySlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
