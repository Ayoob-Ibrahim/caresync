import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  imports: [CommonModule],
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.scss'
})
export class SvgComponent {
  private stan_vec: string;
  selected_svg: string;


  @Input() public get svgType(): string {
    return this.stan_vec;
  }

  public set svgType(data) {
    this.stan_vec = data.trim()
  }


  ngAfterViewInit(): void {

  }


  ngOnChanges(): void {
    this.selected_svg = this.stan_vec;
  }
}
