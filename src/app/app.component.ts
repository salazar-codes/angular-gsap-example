import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { INIT_ANIMATION_FADE_IN } from '../constants/animations-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('box', { static: true }) box!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
    gsap.from(this.box.nativeElement, INIT_ANIMATION_FADE_IN);
  }
}
