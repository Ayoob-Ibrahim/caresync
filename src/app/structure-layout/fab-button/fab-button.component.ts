import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { speedDialFabAnimations } from '../../animation/common-animation';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-fab-button',
  imports: [CommonModule],
  templateUrl: './fab-button.component.html',
  styleUrl: './fab-button.component.scss',
  animations: speedDialFabAnimations
})
export class FabButtonComponent implements OnInit {
  private router: Router = inject(Router)
  public options = {
    buttons: [
      { icon: 'bi bi-arrow-up-circle', type: 'scroll-up' },
      { icon: 'bi-house-door', type: 'home' },
      { icon: 'bi bi-telephone-outbound', type: 'phone' },
      { icon: 'bi bi-envelope', type: 'mail' }
    ]
  };
  public buttons = [];

  public fabTogglerState = 'inactive';

  constructor() { }

  public ngOnInit() {
    const maxButtons = 6;
    if (this.options.buttons.length > maxButtons) {
      this.options.buttons.splice(5, this.options.buttons.length - maxButtons);
    }
  }

  public showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.options.buttons;
  }

  public hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  public toggle() {
    this.buttons.length
      ? this.hideItems()
      : this.showItems();
  }


  selectionOption(type: string): void {
    switch (type) {
      case 'scroll-up':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'phone':
        // this.makePhoneCall();
        break;
      case 'mail':
        // this.sendEmail();
        break;

    }
    this.toggle()
  }



}
