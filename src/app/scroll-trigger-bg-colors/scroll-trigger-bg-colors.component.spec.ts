import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTriggerBgColorsComponent } from './scroll-trigger-bg-colors.component';

describe('ScrollTriggerBgColorsComponent', () => {
  let component: ScrollTriggerBgColorsComponent;
  let fixture: ComponentFixture<ScrollTriggerBgColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollTriggerBgColorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollTriggerBgColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
