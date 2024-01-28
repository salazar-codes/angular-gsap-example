import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-scroll-trigger',
  templateUrl: './scroll-trigger.component.html',
  styleUrl: './scroll-trigger.component.scss',
})
export class ScrollTriggerComponent implements AfterViewInit {
  @ViewChild('verticalContainer') verticalContainer!: ElementRef<HTMLElement>;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    if (this.verticalContainer) {
      const leftSection =
        this.verticalContainer.nativeElement.querySelector('.left-section');
      const rightSection =
        this.verticalContainer.nativeElement.querySelector('.right-section');

      const containers = Array.from(leftSection!.querySelectorAll('.w-full'));
      const snapPoints = containers.map((_, i) => i / (containers.length - 1));

      // Resto de tu código...
      gsap.set(rightSection, {
        y: -2500,
      });

      gsap
        .timeline({
          defaults: {
            ease: 'none',
          },
          scrollTrigger: {
            trigger: this.verticalContainer.nativeElement,
            start: 'top top',
            end: '+=3000',
            pin: true,
            invalidateOnRefresh: true,
            markers: true,
            scrub: true,
            snap: snapPoints,
          },
        })
        .to(leftSection, {
          y: -2500,
        })
        .to(
          rightSection,
          {
            y: 0,
          },
          0
        );
    }
  }
}
