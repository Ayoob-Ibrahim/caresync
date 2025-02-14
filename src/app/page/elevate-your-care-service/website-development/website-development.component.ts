import { Component } from '@angular/core';
import { InitailCardPanelComponent } from '../../../elevate-care-widget/initail-card-panel/initail-card-panel.component';

@Component({
  selector: 'app-website-development',
  imports: [InitailCardPanelComponent],
  templateUrl: './website-development.component.html',
  styleUrl: './website-development.component.scss'
})
export class WebsiteDevelopmentComponent {
  initialData = {
    main: {
      class: "container-stretch",
      sections: [
        {
          headingSmall: `<span class="txt-dark-secondary">Website Development</span>`,
          headingLarge: `Healthcare <span class="txt-dark-secondary">Visibility</span> with Tailored SEO Friendly <span class="txt-dark-secondary">Websites</span>`,
          description: "Care Sync Experts offers tailored website development for healthcare professionals, creating easy-to-navigate, SEO-optimized sites that build trust, boost engagement, and enhance your online presence to drive results."
        },
        {
          image: {
            src: "https://caresyncexperts.co.uk/images/elevate/web-dev-hero-image.jpg",
            alt: "Healthcare Website Development"
          }
        }
      ],
      card: {
        class: "card",
        items: [
          {
            icon: "https://caresyncexperts.co.uk/images/icons/trends-up.svg",
            title: "Improves",
            subtitle: "Customer Engagements"
          },
          {
            icon: "https://caresyncexperts.co.uk/images/icons/users-plus.svg",
            title: "Attracts New Clients",
            subtitle: "Increased Visibility"
          },
          {
            icon: "https://caresyncexperts.co.uk/images/icons/navigation-pointer.svg",
            title: "Accessible",
            subtitle: "Easy to navigate"
          }
        ]
      }
    }
  };

}
