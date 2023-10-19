import { Component } from '@angular/core';
import { AnimationBuilder, animate, style } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(private animationBuilder: AnimationBuilder) {}

  fadeInAnimation = this.animationBuilder.build([
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 }))
  ]);

}
