import { AfterViewInit, computed, Directive, effect, ElementRef, EventEmitter, HostListener, input, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Directive()
export abstract class CDKBASE implements OnInit, ControlValueAccessor, OnDestroy, AfterViewInit {
    source = input<any[]>([]);
    localSource = signal<string[]>([])
    selectedIndex = input<number>(0);
    checkboxes = input<boolean>(false);
    placeholder = input<string>('select ...');
    NoData = input<string>('No data Found');
    dropDownHeight = input<string>('150px');
    height = input<string>('50px');
    searchControl = new FormControl('');
    value: unknown;
    disabled = false;
    initialData = input<any[]>([]);
    @Output() outputData = new EventEmitter<any>();
    constructor(private eRef: ElementRef) {
        effect(() => {
            const currentSource = this.source();
            this.localSource.set(currentSource);
            const intialdata = this.initialData();
            this.initailDataController(intialdata)
        });
    }

    private isOpenSubject = new BehaviorSubject<boolean>(false);
    isOpen$ = this.isOpenSubject.asObservable();
    protected destroy$ = new Subject<void>();


    ngOnInit() {
    }

    toggleOpen() {
        this.isOpenSubject.next(!this.isOpenSubject.value);
    }

    @HostListener('document:click', ['$event'])
    onOutsideClick(event: MouseEvent) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.isOpenSubject.next(false);
        }
    }


    CheckChange(event: unknown): void {
        if (!event['value']) return;
        this.selectValue(event['value'])
    }

    onSearchChange(value: string) {
        const filtered = this.source().filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        this.localSource.set(filtered);

    }

    onChange = (value: any) => { };
    onTouched = () => { };


    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    selectValue(val: string) {
        this.value = val;
        this.outputData.emit({ value: this.value })
        this.onChange(val);
        this.onTouched();
    }


    ngAfterViewInit() {
        this.inputlisterer();
    }

    ngOnDestroy(): void {
        this.isOpenSubject.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }

    protected inputlisterer() { };
    protected initailDataController(unknown) { };
}