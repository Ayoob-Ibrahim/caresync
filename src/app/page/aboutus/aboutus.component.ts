import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfiniteCarouselComponent } from '../../component/infinite-carousel/infinite-carousel.component';
import { ThreeRowContentComponent } from '../../service-widgets/three-row-content/three-row-content.component';
import { HorizontalCardComponent } from '../../widgets/horizontal-card/horizontal-card.component';

@Component({
  selector: 'app-aboutus',
  imports: [CommonModule, InfiniteCarouselComponent, ThreeRowContentComponent, HorizontalCardComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  public coreValues = [
    {
      width: '35%',
      title: 'Professionalism',
      content: 'Our services are delivered with the level of professionalism ensuring expert attention and care to every detail.'
    },
    {
      width: '28%',
      title: 'Integrity',
      content: 'We conduct our operations with transparency, honesty and always keeping our clients best interests in mind.'
    },
    {
      width: '35%',
      title: 'Innovation',
      content: 'We embrace methods and technologies to drive the success of our clients forward.'
    },
    {
      width: '30%',
      title: 'Collaboration',
      content: 'We forge partnerships to effectively address the needs of our clients.'
    },
    {
      width: '38%',
      title: 'Empowerment',
      content: 'We provide our clients with the tools and knowledge they need to manage their businesses.'
    },
    {
      width: '30%',
      title: 'Responsiveness',
      content: 'Promptly addressing our clients needs and concerns is essential, to us.'
    },
  ]

  public team_mates = [
    {
      title: 'Smith Deborah',
      positon: "Team Lead",
      img: "https://s3-alpha-sig.figma.com/img/8b73/bce4/1a524026a5f6befa0ac79dedd45f463a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LuEjbxd2OmpYBtKkc-~4GlqSp5DHJ5nmSCECdA3GTMDcW~v3GWd2eyE07ixmmawrU3HUSMaK9qWN3DOmTtRv0oGeOC835l6FDtrXXjf5TGqYY3aokn26WsgKZDXpPtb1UNvnGsS0DDJDm6UDILxzYKMiUBDwO4D1Lwhkj8lXUfGBpa5twR8zu-hFHUXbV4mX6wab09NmvcT3~mFS2CZFa4IAljTotami-5NF6ekvpDfE7gsybvndteByXfSTkuu-CKLHze4M6NwN0NExZols4Vx7Or2Z5rGvrJQ-VksOAYySc3YoY9jM8XyUE~wZBG1b5pgMi5jomq30~f73zXxDYQ__",
      content: 'Responsible for the overall vision, strategy, and direction, ensuring mission and values are upheld while driving growth and innovation.'
    },
    {
      title: 'Sarah Hopper',
      positon: "Team Member",
      img: "https://s3-alpha-sig.figma.com/img/8134/f0f7/00a7d4f0975948c6fae8c96e17c4d4a3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a3G9ZV9dhnA7Dbk~jckFMhigx2Wn~auGK79PoWvBp5gHDxNalK~8PAKo5PGgxkBHhiZijZmuD0SAKB5VMXACNun1gMNwarxoE6AKnP0lQUH8rHRbnYLUPMqaM~qYvwx0YgjYHZGK0S4Ve99~uw8iyzayRYPAoA4QyEWZ6rnUZ-jd6vKGXdU8EM8WS4F5xElnFk1YXLgcYPYcAKlNp2Yci7sM-Y-1gJXFzA6fmLXwytwxeZW745R7Atef1CcRPvryJynuGCsgNempLdmvzA5LRGYdmJ9aKBU~abwTUaJc~iBTs4FovLOgYubvn90H9c2Ll~L0NFOpxIu~ZaNRRfCRLg__",
      content: 'Responsible for the overall vision, strategy, and direction, ensuring mission and values are upheld while driving growth and innovation.'
    },
    {
      title: 'Smith Deborah',
      positon: "Team Member",
      img: "https://s3-alpha-sig.figma.com/img/8b73/bce4/1a524026a5f6befa0ac79dedd45f463a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LuEjbxd2OmpYBtKkc-~4GlqSp5DHJ5nmSCECdA3GTMDcW~v3GWd2eyE07ixmmawrU3HUSMaK9qWN3DOmTtRv0oGeOC835l6FDtrXXjf5TGqYY3aokn26WsgKZDXpPtb1UNvnGsS0DDJDm6UDILxzYKMiUBDwO4D1Lwhkj8lXUfGBpa5twR8zu-hFHUXbV4mX6wab09NmvcT3~mFS2CZFa4IAljTotami-5NF6ekvpDfE7gsybvndteByXfSTkuu-CKLHze4M6NwN0NExZols4Vx7Or2Z5rGvrJQ-VksOAYySc3YoY9jM8XyUE~wZBG1b5pgMi5jomq30~f73zXxDYQ__",
      content: 'Responsible for the overall vision, strategy, and direction, ensuring mission and values are upheld while driving growth and innovation.'
    },
    {
      title: 'Sarah Hopper',
      positon: "Team Member",
      img: "https://s3-alpha-sig.figma.com/img/8134/f0f7/00a7d4f0975948c6fae8c96e17c4d4a3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a3G9ZV9dhnA7Dbk~jckFMhigx2Wn~auGK79PoWvBp5gHDxNalK~8PAKo5PGgxkBHhiZijZmuD0SAKB5VMXACNun1gMNwarxoE6AKnP0lQUH8rHRbnYLUPMqaM~qYvwx0YgjYHZGK0S4Ve99~uw8iyzayRYPAoA4QyEWZ6rnUZ-jd6vKGXdU8EM8WS4F5xElnFk1YXLgcYPYcAKlNp2Yci7sM-Y-1gJXFzA6fmLXwytwxeZW745R7Atef1CcRPvryJynuGCsgNempLdmvzA5LRGYdmJ9aKBU~abwTUaJc~iBTs4FovLOgYubvn90H9c2Ll~L0NFOpxIu~ZaNRRfCRLg__",
      content: 'Responsible for the overall vision, strategy, and direction, ensuring mission and values are upheld while driving growth and innovation.'
    },
  ]

  public client_aquistion_data = {
    "contentWrapper": {
      "sectionHeaderWrap": {
        "heading": "Why Choose CareSync Experts?",
        "headingUnderline": true
      },
      "image": "https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618869762.png",
      "subSections": [
        {
          "size": "32%",
          "height": "380px",
          "sectionHeaderWrap": {
            "heading": "Customised Solution"
          },
          "cards": [
            {
              "cardDetails": {
                "description": "Each business setup strategy is tailored to suit your requirements and operational environment.",
                "icon": "https://caresyncexperts.co.uk/images/icons/double-check.svg"
              }
            }
          ]
        },
        {
          "size": "32%",
          "height": "380px",
          "sectionHeaderWrap": {
            "heading": "Demonstrated Success"
          },
          "cards": [
            {
              "cardDetails": {
                "description": "Our impressive track record speaks volumes. We have a history of aiding businesses to yours in growing and prospering effectively.",
                "icon": "https://caresyncexperts.co.uk/images/icons/double-check.svg"
              }
            }
          ]
        },
        {
          "size": "32%",
          "height": "380px",
          "sectionHeaderWrap": {
            "heading": "Extensive Assistance"
          },
          "cards": [
            {
              "cardDetails": {
                "description": "From CQC enrollment, to establishing your business and more we provide a range of services to assist you on your business path and guarantee your achievements.",
                "icon": "https://caresyncexperts.co.uk/images/icons/double-check.svg"
              }
            }
          ]
        },
      ]
    }
  }

  public horizontal_card = {
    "cardContainer": {
      "card": {
        "leftSide": {
          "content": {
            "h2": "Are you looking to take your care agency to another level?",
            "p": "Ready to progress in your care business journey? Reach out to us today for a consultation. Kickstart your path to success with Care Sync Experts."
          }
        },
        "rightSide": {
          "textWhite": {
            "p": [
              "Phone: 0333 577 0877",
              "Email: hello@caresyncexperts.co.uk"
            ],
            "button": "Contact us"
          }
        }
      }
    }
  }
}
