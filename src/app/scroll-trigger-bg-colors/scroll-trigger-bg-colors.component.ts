import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-scroll-trigger-bg-colors',
  templateUrl: './scroll-trigger-bg-colors.component.html',
  styleUrl: './scroll-trigger-bg-colors.component.scss',
})
export class ScrollTriggerBgColorsComponent
  implements AfterViewInit, OnDestroy
{
  ngAfterViewInit() {
    const coloredSections = gsap.utils.toArray('[data-color]');

    coloredSections.forEach((section, i) => {
      // grab the colors from the attribute
      const dataColorAttribute = (section as HTMLElement)?.getAttribute(
        'data-color'
      );

      if (dataColorAttribute) {
        const [bgColor, color] = dataColorAttribute.split(' ');

        ScrollTrigger.create({
          trigger: section as gsap.DOMTarget,
          start: '200 bottom',
          end: '+=100%',
          onToggle: (self) => {
            // whenever we enter a section from either direction (scrolling up or down), animate to its color
            if (self.isActive) {
              gsap.to('body', {
                backgroundColor: bgColor,
                color: color,
                overwrite: 'auto',
              });
              // when we LEAVE the very first section scrolling in reverse -OR- when we scroll past the very last section (forward), return to the "normal" colors
            } else if (
              (i === 0 && self.direction < 0) ||
              (i === coloredSections.length - 1 && self.direction > 0)
            ) {
              gsap.to('body', {
                backgroundColor: 'blue',
                color: 'white',
                overwrite: 'auto',
              });
            }
          },
        });
      }
    });
  }

  ngOnDestroy() {
    // Limpiar recursos si es necesario
    // Nota: La limpieza de recursos específicos de GSAP y ScrollTrigger depende de tus necesidades exactas.
  }
}
