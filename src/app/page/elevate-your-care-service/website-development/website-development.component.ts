import { Component } from '@angular/core';
import { InitailCardPanelComponent } from '../../../elevate-care-widget/initail-card-panel/initail-card-panel.component';
import { LiteBluePanelComponent } from '../../../elevate-care-widget/lite-blue-panel/lite-blue-panel.component';
import { CommonModule } from '@angular/common';
import { VerticalTabsComponent } from '../../../elevate-care-widget/vertical-tabs/vertical-tabs.component';

@Component({
  selector: 'app-website-development',
  imports: [InitailCardPanelComponent, LiteBluePanelComponent, CommonModule, VerticalTabsComponent],
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


  websiteDesign = [
    {
      "content": {
        "heading": {
          "text": "Website Design"
        },
        "description": {
          "text": "Our main focus is creating custom websites tailored for healthcare organisations such as home care providers and services, for supported living and domiciliary care. Through our approach we guarantee a website that meets your needs:"
        },
        "button": {
          "text": "Learn More",
          "link": "https://caresyncexperts.co.uk/web-development/website-design"
        },
        "columns": {
          "items": [
            {
              "image": {
                "src": "https://caresyncexperts.co.uk/images/elevate/visually-appealing-website.jpg",
                "alt": "Visually Appealing Website"
              },
              "heading": {
                "text": "Visually Appealing"
              },
              "description": {
                "text": "Clean, professional design that reflects your brand."
              }
            },
            {
              "image": {
                "src": "https://caresyncexperts.co.uk/images/elevate/user-friendly-website.jpg",
                "alt": "User Friendly Websites"
              },
              "heading": {
                "text": "User Friendly"
              },
              "description": {
                "text": "Easy navigation and logical layout, ensuring users can quickly find what they need."
              }
            },
            {
              "image": {
                "src": "https://caresyncexperts.co.uk/images/elevate/seo-optimised-website.jpg",
                "alt": "SEO Optimisation"
              },
              "heading": {
                "text": "SEO-Optimised"
              },
              "description": {
                "text": "Built-in optimisation to rank higher in search engine results."
              }
            }
          ]
        }
      }
    },

    {
      "content": {
        "heading": {
          "text": "Graphics Design"
        },
        "description": {
          "text": "Our skilled team of designers offers services that elevate the representation of your brand. Whether its crafting logos and brochures or designing posters and infographics our creations effectively convey your message making an impact on your clients and customers."
        },
        "button": {
          "text": "Learn More",
          "link": "https://caresyncexperts.co.uk/web-development/graphic-design"
        },
        "columns": {
          "items": [
            {
              "image": {
                "src": "https://caresyncexperts.co.uk/images/elevate/custom-logos-design.jpg",
                "alt": "Custom Logos Design"
              },
              "heading": {
                "text": "Custom Logos"
              },
              "description": {
                "text": "Create a distinct, memorable logo that reflects your healthcare brand’s core values."
              }
            },
            {
              "image": {
                "src": "https://caresyncexperts.co.uk/images/elevate/educational-brochures-design.jpg",
                "alt": "Educational Brochures Design"
              },
              "heading": {
                "text": "Educational Brochures"
              },
              "description": {
                "text": "Communicate complex medical information in easy-to-understand formats."
              }
            },
            {
              "image": {
                "src": "https://caresyncexperts.co.uk/images/elevate/event-posters-design.jpg",
                "alt": "Event Posters Design"
              },
              "heading": {
                "text": "Event Posters"
              },
              "description": {
                "text": "Promote events, services, or healthcare initiatives with eye-catching designs."
              }
            }
          ]
        }
      }
    },
    {
      "content": {
        "heading": {
          "text": "Digital Marketing"
        },
        "description": {
          "text": "Creating a thriving website requires a marketing plan in place. Our services cater to the healthcare industry with tailored marketing solutions like search engine optimisation (SEO) pay per click (PPC) advertising, and managing social media platforms to draw in traffic and transform visitors into customers."
        },
        "button": {
          "text": "Learn More",
          "link": "https://caresyncexperts.co.uk/web-development/digital-marketing"
        },
        "columns": {
          "items": [
            {
              "image": {
                "src": "https://caresyncexperts.co.uk/images/elevate/seo-services.jpg",
                "alt": "SEO Services"
              },
              "heading": {
                "text": "SEO Services"
              },
              "description": {
                "text": "We employ cutting edge SEO techniques to enhance your position, in search engine results pages (SERPs) making it easier for prospective customers and clients to locate your business or practice."
              }
            },
            {
              "image": {
                "src": "https://caresyncexperts.co.uk/images/elevate/ppc-advertising.jpg",
                "alt": "PPC Advertising"
              },
              "heading": {
                "text": "PPC Advertising"
              },
              "description": {
                "text": "Targeted ad campaigns designed to increase visibility and attract the right audience."
              }
            },
            {
              "image": {
                "src": "https://caresyncexperts.co.uk/images/elevate/social-media-integration.jpg",
                "alt": "Social Media Integration"
              },
              "heading": {
                "text": "Social Media Integration"
              },
              "description": {
                "text": "Create a fan base by linking your website to your social media channels for engagement and connection with your audience."
              }
            }
          ]
        }
      }
    }



  ]




}
