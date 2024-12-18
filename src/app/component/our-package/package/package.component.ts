import { Component } from '@angular/core';
import { PackageCardComponent } from '../package-card/package-card.component';
import { CommonModule } from '@angular/common';
import { PackageInfo } from '../../../interface/common.interface';
import packageJson from '../../../json-data/package-card.json'
@Component({
  selector: 'app-package',
  imports: [PackageCardComponent, CommonModule],
  templateUrl: './package.component.html',
  styleUrl: './package.component.scss'
})
export class PackageComponent {
  list_package: PackageInfo[] = packageJson
}
