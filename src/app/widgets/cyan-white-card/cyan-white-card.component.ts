import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cyan-white-card',
  imports: [CommonModule],
  templateUrl: './cyan-white-card.component.html',
  styleUrl: './cyan-white-card.component.scss'
})
export class CyanWhiteCardComponent {
  @Input() dataProperty: any;

  openPdf() {
    window.open(this.dataProperty.mainContainer.subContainer.rightSide.button.pdfUrl, "_blank");
  }
}
