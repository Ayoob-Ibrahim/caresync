import { Component, signal } from '@angular/core';
import { AccordianComponent } from '../accordian/accordian.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-growing-market',
  imports: [AccordianComponent,CommonModule],
  templateUrl: './growing-market.component.html',
  styleUrl: './growing-market.component.scss'
})
export class GrowingMarketComponent {
  selectedIndex=signal(null);
data=[
  {
    "header":"Expanding Elderly Population",
   "content":"The UK’s elderly population is projected to grow by 20% over the next decade, increasing the demand for quality home care services. Home care services are becoming the preferred choice with the market expected to expand by 4.3% annually." 
  },
  {
    "header":"High Return on Investment",
   "content":"The average rate for home health care services is around £23 per hour, with initial setup costs ranging from £10,000 to £20,000. Potential profit margins can be as high as 90% for well-managed care agencies." 
  },
  {
    "header":"Long term financial freedom",
   "content":"As the care market continues to expand and evolve, entering this field presents numerous business opportunities. Whether you are managing a domiciliary service and want to expand into other sectors such as supported living, the potential for success becomes significantly more attainable. When operated effectively, a business in the care industry can not only meet the growing demand for services but also pave the way to financial independence." 
  }
]
}
