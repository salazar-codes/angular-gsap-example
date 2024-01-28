import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar explícitamente el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-scroll-trigger-apple',
  templateUrl: './scroll-trigger-apple.component.html',
  styleUrl: './scroll-trigger-apple.component.scss'
})
export class ScrollTriggerAppleComponent implements AfterViewInit, OnDestroy {
  @ViewChild('imageSequenceCanvas') imageSequenceCanvas!: ElementRef<HTMLCanvasElement>;

  private frameCount = 147;
  private urls!: string[];
  private images!: HTMLImageElement[];
  private curFrame = -1;
  private playhead = { frame: 0 };
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;

  ngAfterViewInit() {
    this.urls = new Array(this.frameCount).fill(null).map((o, i) =>
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(i + 1).toString().padStart(4, '0')}.jpg`
    );

    console.log(this.urls);

    this.canvas = this.imageSequenceCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;

    this.images = this.urls.map((url, i) => {
      const img = new Image();
      img.src = url;
      i || (img.onload = () => this.updateImage());
      return img;
    });

    this.setupImageSequence();
  }

  ngOnDestroy() {
    // Limpiar recursos cuando el componente es destruido
    if (this.images) {
      this.images.forEach(img => img.onload = null);
    }
  }

  private updateImage() {
    const frame = Math.round(this.playhead.frame);
    if (frame !== this.curFrame) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(this.images[frame], 0, 0);
      this.curFrame = frame;
    }
  }

  private setupImageSequence() {
    gsap.to(this.playhead, {
      frame: this.images.length - 1,
      ease: 'none',
      onUpdate: () => this.updateImage(),
      duration: this.images.length / 30,
      paused: false, // Cambiar a true si se desea iniciar pausado
      scrollTrigger: {
        start: 0,
        end: 'max',
        scrub: true,
      },
    });
  }
}
