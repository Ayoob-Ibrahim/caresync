// animations.ts
import { trigger, state, style, animate, transition } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
    state('in', style({
        transform: 'translateX(0)'
    })),
    state('out', style({
        transform: 'translateX(-100%)'
    })),
    transition('in <=> out', [
        animate('300ms ease-in-out')
    ])
]);

export const fadeInAnimation = trigger('fadeIn', [
    state('in', style({
        opacity: 1
    })),
    state('out', style({
        opacity: 0
    })),
    transition('in <=> out', [
        animate('300ms ease-in-out')
    ])
]);

export const menuDropDownAnimation = [
    trigger('dropdownAnimation', [
        state('void', style({ height: '0', opacity: 0 })),
        state('*', style({ height: '*', opacity: 1 })),
        transition('void => *', [
            animate('300ms ease-in', style({ height: '*', opacity: 1 }))
        ]),
        transition('* => void', [
            animate('300ms ease-out', style({ height: '0', opacity: 0 }))
        ]),
    ]),
]