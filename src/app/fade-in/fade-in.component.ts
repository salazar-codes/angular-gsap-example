import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { INIT_ANIMATION_FADE_IN } from '../../constants/animations-config';

@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrl: './fade-in.component.scss'
})
export class FadeInComponent {
  @ViewChild('box', { static: true }) box!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
    gsap.from(this.box.nativeElement, INIT_ANIMATION_FADE_IN);
  }
}
