import { trigger, state, style, transition, animate } from '@angular/animations';

export const rotatedState = trigger('rotatedState', [
    state('default', style({ transform: 'rotate(0)' })),
    state('rotated', style({ transform: 'rotate(-360deg)' })),
    transition('rotated => default', animate('400ms ease-out')),
    transition('default => rotated', animate('400ms ease-in'))
]);