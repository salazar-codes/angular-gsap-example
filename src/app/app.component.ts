import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('box', { static: true }) box!: ElementRef<HTMLDivElement>;

  INIT_ANIMATION_FADE_IN = {
    delay: 0.2,
    duration: 0.8,
    opacity: 0,
    y: -20,
  };

  ngOnInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
    gsap.from(this.box.nativeElement, this.INIT_ANIMATION_FADE_IN);
  }
}
