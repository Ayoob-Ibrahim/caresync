import { AfterViewInit, Directive } from "@angular/core";
@Directive()
export abstract class WindowScroller implements AfterViewInit {
    ngAfterViewInit(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

}