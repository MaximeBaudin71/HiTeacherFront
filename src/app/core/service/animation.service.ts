import { Injectable } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Injectable({
    providedIn: 'root'
  })
  export class AnimationService {
  
    fadeInAnimation() {
      return trigger('fadeIn', [
        state('void', style({ opacity: 0 })), // État initial
        transition(':enter, :leave', [
          animate('300ms', style({ opacity: 1 })) // Animation de 300 ms
        ])
      ]);
    }
  

  }
  