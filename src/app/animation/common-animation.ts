// animations.ts
import { trigger, state, style, animate, transition, query, stagger, keyframes } from '@angular/animations';

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
];



export const speedDialFabAnimations = [
    trigger('fabToggler', [
        state('inactive', style({
            transform: 'rotate(0deg)'
        })),
        state('active', style({
            transform: 'rotate(225deg)'
        })),
        transition('* <=> *', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger('speedDialStagger', [
        transition('* => *', [

            query(':enter', style({ opacity: 0 }), { optional: true }),

            query(':enter', stagger('40ms',
                [
                    animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                        keyframes(
                            [
                                style({ opacity: 0, transform: 'translateY(10px)' }),
                                style({ opacity: 1, transform: 'translateY(0)' }),
                            ]
                        )
                    )
                ]
            ), { optional: true }),

            query(':leave',
                animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                    keyframes([
                        style({ opacity: 1 }),
                        style({ opacity: 0 }),
                    ])
                ), { optional: true }
            )

        ])
    ])
];


