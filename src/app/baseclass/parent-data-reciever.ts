import { Directive, Input, OnInit } from '@angular/core';
@Directive()
export class BaseDataReciever {
    @Input() dataProperty: any;

    openPdf() {
        window.open(this.dataProperty.mainContainer.subContainer.rightSide.button.pdfUrl, "_blank");
    }
}
