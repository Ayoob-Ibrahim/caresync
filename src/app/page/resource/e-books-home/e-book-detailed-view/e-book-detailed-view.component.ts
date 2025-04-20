import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowScroller } from '../../../../baseclass/scroll-upper';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-e-book-detailed-view',
  imports: [CommonModule, FormsModule],
  templateUrl: './e-book-detailed-view.component.html',
  styleUrl: './e-book-detailed-view.component.scss',
})
export class EBookDetailedViewComponent
  extends WindowScroller
  implements OnInit, AfterViewInit
{
  formJson = [
    {
      formName: 'Your name/Company’s Name',
      icon: 'bi bi-person-lines-fill',
      value: 'dsddsd',
    },
    { formName: 'Email address', icon: 'bi bi-envelope', value: 'riyaskhan7973@gmail.com' },
    { formName: 'Contact number', icon: 'bi bi-phone-vibrate', value: 'asasas' },
    { formName: 'Company’s address', icon: 'bi bi-geo-alt-fill', value: 'asasas' },
    {
      formName: 'How many care recipients (clients) do you have?',
      icon: 'bi bi-people-fill',
      value: 'asasa',
    },
  ];
  constructor(private router: Router, private http: HttpClient) {
    super();
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
  senMail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if any required field is empty
    for (let i = 0; i < this.formJson.length; i++) {
      const field = this.formJson[i];
      if (!field.value || field.value.trim() === '') {
        alert(`Please fill out the "${field.formName}" field.`);
        return;
      }
    }

    // Email format validation
    const email = this.formJson[1].value;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const data = {
      email: email,
      name: this.formJson[0].value,
      phone: this.formJson[2].value,
      address: this.formJson[3].value,
      clients: this.formJson[4].value,
    };

    this.http
      .post('http://mailer-six-alpha.vercel.app/send-email', data)
      .subscribe((res) => {
        alert('Subscribed Successfully');
      });
  }
}
