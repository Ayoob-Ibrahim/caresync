import { Directive, effect, inject, OnInit, signal } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Directive()
export abstract class ParentMenuDataHandler implements OnInit {
    routerDataMenu = signal<string | null>(null);
    customInjector = signal<any>({});
    private route = inject(ActivatedRoute);

    constructor() {
        effect(() => {
            const id = this.routerDataMenu();
            if (id) {
                const data = this.getData()[id];
                this.customInjector.set(data);
            }
        });
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.routerDataMenu.set(params.get('id'));
        });
    }

    protected abstract getData(): Record<string, any>;
}
