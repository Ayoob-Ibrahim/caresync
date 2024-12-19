import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
@Component({
  selector: 'app-tilt',
  imports: [CommonModule],
  templateUrl: './tilt.component.html',
  styleUrl: './tilt.component.scss',
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', [animate('1s ease-in')]),
      transition('visible => hidden', [animate('1s ease-out')]),
    ]),
  ],
})
export class TiltComponent {
  @Input()selectedImage;
 anim=true;
  ngAfterViewInit() {
    console.log(this.selectedImage);
    VanillaTilt.init(this.tiltElement.nativeElement, {
      max: 10,
      speed: 100,
    });
  }
  @ViewChild('tiltElement') tiltElement!: ElementRef;
//   ngOnChanges(change){
// if(change["selectedImage"]["currentValue"] != change["selectedImage"]["previousValue"]){
//   this.anim=false;
//   this.anim=true;
// }
//   }
}
