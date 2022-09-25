import {trigger, transition, style, query, group, animate} from '@angular/animations';

export const fadeInAnimation = trigger('routerAnimation', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width:'100%'
      })
    ]),
    query(':enter', [style({opacity:0})],{optional:true}),
    query(':leave', [style({opacity:1})],{optional:true}),
    query(':leave', [animate('300ms ease', style({
      opacity:0
    }))],{optional:true}),
    query(':enter', [animate('1s ease', style({
      opacity:1
    }))],{optional:true})
    // query(':enter', [style({  opacity: 0 })], {optional: true}),
    // query(':leave', [style({  opacity: 1 })], {optional: true}),
    // group([
    //   query(':leave', [animate('1s ease', style({ opacity: 0 }))], {optional: true}),
    //   query(':enter', [animate('1s ease', style({ opacity: 1 }))], {optional: true})
    //  ])
     //query(':enter', animateChild())
   ])
]);
