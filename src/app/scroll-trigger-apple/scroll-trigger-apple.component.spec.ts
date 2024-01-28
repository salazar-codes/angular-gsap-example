import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTriggerAppleComponent } from './scroll-trigger-apple.component';

describe('ScrollTriggerAppleComponent', () => {
  let component: ScrollTriggerAppleComponent;
  let fixture: ComponentFixture<ScrollTriggerAppleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollTriggerAppleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollTriggerAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
