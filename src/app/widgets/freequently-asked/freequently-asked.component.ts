import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-freequently-asked',
  imports: [CommonModule],
  templateUrl: './freequently-asked.component.html',
  styleUrl: './freequently-asked.component.scss',
})
export class FreequentlyAskedComponent {
  selecteData: any = signal(null);
  selectIndex(index, event) {
    console.log(index, 'asas');
    //  setTimeout(()=>{
    if (index == this.selecteData()) {
      this.selecteData.set(null);
    } else {
      this.selecteData.set(index);
    }

    //  },500)
    // console.log(index,this.accordData.selectedIndex(),"after")
  }
  @Input() dataProperty;
}
