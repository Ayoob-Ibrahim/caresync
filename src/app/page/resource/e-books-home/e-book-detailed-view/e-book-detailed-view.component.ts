import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-book-detailed-view',
  imports: [CommonModule],
  templateUrl: './e-book-detailed-view.component.html',
  styleUrl: './e-book-detailed-view.component.scss'
})
export class EBookDetailedViewComponent implements OnInit, AfterViewInit {
  formJson = [
    { formName: 'Your name/Company’s Name', icon: 'bi bi-person-lines-fill' },
    { formName: 'Email address', icon: 'bi bi-envelope' },
    { formName: 'Contact number', icon: 'bi bi-phone-vibrate' },
    { formName: 'Company’s address', icon: 'bi bi-geo-alt-fill' },
    { formName: 'How many care recipients (clients) do you have?', icon: 'bi bi-people-fill' },
  ]
  constructor(private router: Router) { }
  ngAfterViewInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  receivedData: any;

  ngOnInit() {
    this.receivedData = history.state.detailData;
    if (!this.receivedData) this.router.navigate(['ebooks', 'detailed-view']);
  }


  download(link_: string) {
    const pdfUrl = link_;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = link_.split('/')[2];
    link.click();
  }
}
