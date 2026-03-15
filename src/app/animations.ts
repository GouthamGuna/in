import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('0.6s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const staggerContainer = trigger('staggerContainer', [
  transition(':enter', [
    query('.stagger-item', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('100ms', [
        animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const hoverScale = trigger('hoverScale', [
  transition(':enter', [
    style({ transform: 'scale(1)' }),
  ]),
  transition('* => hover', [
    animate('0.2s ease-out', style({ transform: 'scale(1.05)' }))
  ]),
  transition('hover => *', [
    animate('0.2s ease-in', style({ transform: 'scale(1)' }))
  ])
]);
