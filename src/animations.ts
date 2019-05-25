

import {sequence, trigger, stagger, animate, style, group, query, transition, animateChild} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {optional: true}),
    query(':enter', style({ transform: 'translateX(-100%)' }), {optional: true}),
    sequence([
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('1000ms ease', style({ transform: 'translateX(100%)' }))
        ], {optional: true}),
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('1000ms ease',
            style({ transform: 'translateX(0%)' })),
        ], {optional: true}),
      ]),
      query(':enter', animateChild(), {optional: true}),
    ])
  ])
]);

