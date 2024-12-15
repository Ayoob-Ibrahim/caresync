import { Component } from '@angular/core';
import { ServicesComponent } from '../../component/services/services.component';
import { TestComponent } from '../../component/test/test.component';

@Component({
  selector: 'app-home',
  imports: [ServicesComponent,TestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
