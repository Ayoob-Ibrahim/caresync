import { Directive, Input, OnInit } from '@angular/core';
@Directive()
export abstract class BaseDataReciever {
    @Input() dataProperty: any;
    constructor() {
    }
    openPdf() {
        window.open(this.dataProperty.mainContainer.subContainer.rightSide.button.pdfUrl, "_blank");
    }
}
