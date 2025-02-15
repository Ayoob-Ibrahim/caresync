import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lite-blue-panel',
  imports: [CommonModule, RouterLink],
  templateUrl: './lite-blue-panel.component.html',
  styleUrl: './lite-blue-panel.component.scss'
})
export class LiteBluePanelComponent {
  dataProperty = {
    "websiteBenefits": [
      {

        "details": {
          "direction": "row",
          "width": "52%",
          "flexbasis": "60%",
          "text": {
            "heading": {
              "class": "website-benefit-heading txt-dark-gray",
              "text": "Attracting Potential Clients"
            },
            "description": "Your website is often the first point of contact for prospective clients, making first impressions matter."
          },
          "button": {
            "class": "button dark-secondary-outline-button",
            "text": "Learn More",
            "link": "/services/client-acquisition"
          }
        },
        "image": {
          "src": "https://caresyncexperts.co.uk/images/elevate/website-benefit-1.svg",
          "alt": "Improving online visibility for healthcare services"
        }
      },
      {

        "details": {
          "direction": "row",
          "width": "38%",
          "flexbasis": "98%",
          "text": {
            "heading": {
              "class": "website-benefit-heading txt-dark-gray",
              "text": "Building Credibility"
            },
            "description": "A well-designed and functional website reinforces your trustworthiness and professionalism."
          },
          "button": {
            "class": "button dark-secondary-outline-button",
            "text": "Learn More",
            "link": "/services/comprehensive-training"
          }
        }
      },
      {

        "details": {
          "direction": "row",
          "width": "38%",
          "flexbasis": "98%",
          "text": {
            "heading": {
              "class": "website-benefit-heading txt-dark-gray",
              "text": "Enhancing Client Engagement"
            },
            "description": "Interactive features like appointment booking, client portals, and telehealth services boost engagement and foster long-term client relationships."
          },
          "button": {
            "class": "button dark-secondary-outline-button",
            "text": "Learn More",
            "link": "/guidance/healthcare-marketing-strategies"
          }
        }
      },
      {

        "image": {
          "src": "https://caresyncexperts.co.uk/images/elevate/website-benefit-2.svg",
          "alt": "Improving online visibility for healthcare services",
          "padding": '2rem'
        },
        "details": {
          "direction": "row-reverse",
          "width": "52%",
          "flexbasis": "60%",
          "text": {
            "heading": {
              "class": "website-benefit-heading txt-dark-gray",
              "text": "Improving Online Visibility"
            },
            "description": "Through SEO optimisation, your website will rank higher on search engines, increasing the chances of prospective clients finding your services."
          },
          "button": {
            "class": "button dark-secondary-outline-button",
            "text": "Learn More",
            "link": "/guidance/business-operations"
          }
        }
      }
    ]
  }

}
