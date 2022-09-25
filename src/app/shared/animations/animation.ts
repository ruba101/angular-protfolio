import {trigger, transition, style, query, group, animate} from '@angular/animations';

export const fadeInAnimation = trigger('routerAnimation', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('1s ease-in', style({ opacity: 1}))
  ]),
  transition(':leave', [
    style({
      opacity: 1
    }),
    animate('1s ease-out', style({ opacity: 0}))
  ])
]);
