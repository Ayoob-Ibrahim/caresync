import {
    Directive,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    ViewContainerRef
} from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { merge, Observable, Subscription } from 'rxjs';
import { DropdownPanel } from '../interface/common.interface';
import { log } from 'node:console';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
@Directive({
    selector: '[dropdownTriggerFor]',
    host: {
        '(click)': 'toggleDropdown()'
    },
    standalone: true,
    exportAs: 'toggleOpener'
})
export class DropdownTriggerForDirective implements OnInit, OnDestroy {
    public isDropdownOpen = false;
    private overlayRef: OverlayRef;
    private dropdownClosingActionsSub = Subscription.EMPTY;
    private scrollSub = Subscription.EMPTY;
    @Input('dropdownTriggerFor') public dropdownPanel: DropdownPanel;

    constructor(
        private overlay: Overlay,
        private elementRef: ElementRef<HTMLElement>,
        private viewContainerRef: ViewContainerRef,
        private scrollDispatcher: ScrollDispatcher
    ) { }
    ngOnInit(): void {
        this.scrollSub = this.scrollDispatcher
            .ancestorScrolled(this.elementRef, 100)
            .subscribe(() => {
                this.destroyDropdown();
            });
    }

    toggleDropdown(): void {
        this.isDropdownOpen ? this.destroyDropdown() : this.openDropdown();
    }

    openDropdown(): void {
        this.isDropdownOpen = true;
        this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.close(),
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.elementRef)
                .withPositions([
                    {
                        originX: 'center',
                        originY: 'bottom',
                        overlayX: 'center',
                        overlayY: 'top',
                        offsetY: 3
                    }
                ])
        });

        const templatePortal = new TemplatePortal(
            this.dropdownPanel.templateRef,
            this.viewContainerRef
        );
        this.overlayRef.attach(templatePortal);

        this.dropdownClosingActionsSub = this.dropdownClosingActions().subscribe(
            (res) => {
                if (res)
                    this.destroyDropdown()
            }

        );
    }

    private dropdownClosingActions(): Observable<MouseEvent | void> {
        const backdropClick$ = this.overlayRef.backdropClick();
        const detachment$ = this.overlayRef.detachments();
        const dropdownClosed = this.dropdownPanel.closed;

        return merge(backdropClick$, detachment$, dropdownClosed);
    }

    private destroyDropdown(): void {
        if (!this.overlayRef || !this.isDropdownOpen) {
            return;
        }

        this.dropdownClosingActionsSub.unsubscribe();
        this.isDropdownOpen = false;
        this.overlayRef.detach();
    }

    ngOnDestroy(): void {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
        if (this.scrollSub)
            this.scrollSub.unsubscribe();
    }
}
