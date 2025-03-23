import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { InfiniteCarouselComponent } from '../../component/infinite-carousel/infinite-carousel.component';
import { ThreeRowContentComponent } from '../../service-widgets/three-row-content/three-row-content.component';
import { HorizontalCardComponent } from '../../widgets/horizontal-card/horizontal-card.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import infinite_carousel from '../../json-data/infinite-carousel.json';
import { WindowScroller } from '../../baseclass/scroll-upper';
@Component({
  selector: 'app-aboutus',
  imports: [CommonModule, InfiniteCarouselComponent, ThreeRowContentComponent, HorizontalCardComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent extends WindowScroller {
  data = infinite_carousel;

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
      title: 'Derrick Mwesigwa',
      width: "33%",
      imgName: "Derrick Mwesigwa.jpeg",
      positon: "Tender Writing Specialist",
      img: "https://s3-alpha-sig.figma.com/img/8b73/bce4/1a524026a5f6befa0ac79dedd45f463a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LuEjbxd2OmpYBtKkc-~4GlqSp5DHJ5nmSCECdA3GTMDcW~v3GWd2eyE07ixmmawrU3HUSMaK9qWN3DOmTtRv0oGeOC835l6FDtrXXjf5TGqYY3aokn26WsgKZDXpPtb1UNvnGsS0DDJDm6UDILxzYKMiUBDwO4D1Lwhkj8lXUfGBpa5twR8zu-hFHUXbV4mX6wab09NmvcT3~mFS2CZFa4IAljTotami-5NF6ekvpDfE7gsybvndteByXfSTkuu-CKLHze4M6NwN0NExZols4Vx7Or2Z5rGvrJQ-VksOAYySc3YoY9jM8XyUE~wZBG1b5pgMi5jomq30~f73zXxDYQ__",
      content: 'With over 10 years of experience in tender writing for healthcare providers, Derrick specialises in crafting compelling bids that help businesses secure vital contracts. His in-depth knowledge of the healthcare sector and keen attention to detail ensure exceptional results in tender documentation.'
    },
    {
      title: 'Tessy Bhala',
      width: "33%",
      imgName: "TessyBhala.jpeg",
      positon: "Administrative Coordinator",
      img: "https://s3-alpha-sig.figma.com/img/8134/f0f7/00a7d4f0975948c6fae8c96e17c4d4a3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a3G9ZV9dhnA7Dbk~jckFMhigx2Wn~auGK79PoWvBp5gHDxNalK~8PAKo5PGgxkBHhiZijZmuD0SAKB5VMXACNun1gMNwarxoE6AKnP0lQUH8rHRbnYLUPMqaM~qYvwx0YgjYHZGK0S4Ve99~uw8iyzayRYPAoA4QyEWZ6rnUZ-jd6vKGXdU8EM8WS4F5xElnFk1YXLgcYPYcAKlNp2Yci7sM-Y-1gJXFzA6fmLXwytwxeZW745R7Atef1CcRPvryJynuGCsgNempLdmvzA5LRGYdmJ9aKBU~abwTUaJc~iBTs4FovLOgYubvn90H9c2Ll~L0NFOpxIu~ZaNRRfCRLg__",
      content: 'Tessy is the backbone of our operations, expertly managing incoming calls, handling enquiries, and ensuring the smooth day-to-day running of the office. With over 5 years of administrative experience, she is known for her efficiency, professionalism, and excellent communication skills.'
    },
    {
      title: 'Collins Bonsi',
      width: "33%",
      imgName: "CollinsBonsi.jpeg",
      positon: "Manager",
      img: "https://s3-alpha-sig.figma.com/img/8134/f0f7/00a7d4f0975948c6fae8c96e17c4d4a3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a3G9ZV9dhnA7Dbk~jckFMhigx2Wn~auGK79PoWvBp5gHDxNalK~8PAKo5PGgxkBHhiZijZmuD0SAKB5VMXACNun1gMNwarxoE6AKnP0lQUH8rHRbnYLUPMqaM~qYvwx0YgjYHZGK0S4Ve99~uw8iyzayRYPAoA4QyEWZ6rnUZ-jd6vKGXdU8EM8WS4F5xElnFk1YXLgcYPYcAKlNp2Yci7sM-Y-1gJXFzA6fmLXwytwxeZW745R7Atef1CcRPvryJynuGCsgNempLdmvzA5LRGYdmJ9aKBU~abwTUaJc~iBTs4FovLOgYubvn90H9c2Ll~L0NFOpxIu~ZaNRRfCRLg__",
      content: 'As the Manager of CareSync Experts, Collins brings over 5 years of leadership and experience within the care sector. He oversees the smooth delivery of our consultancy services, manages client relationships, and drives operational success across the organisation.'
    },
    {
      title: 'Millicent Ntaisi',
      width: "24.5%",
      imgName: "MillicentNtaisi.jpeg",
      positon: "Senior Manager and Business Coach",
      img: "https://s3-alpha-sig.figma.com/img/8b73/bce4/1a524026a5f6befa0ac79dedd45f463a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LuEjbxd2OmpYBtKkc-~4GlqSp5DHJ5nmSCECdA3GTMDcW~v3GWd2eyE07ixmmawrU3HUSMaK9qWN3DOmTtRv0oGeOC835l6FDtrXXjf5TGqYY3aokn26WsgKZDXpPtb1UNvnGsS0DDJDm6UDILxzYKMiUBDwO4D1Lwhkj8lXUfGBpa5twR8zu-hFHUXbV4mX6wab09NmvcT3~mFS2CZFa4IAljTotami-5NF6ekvpDfE7gsybvndteByXfSTkuu-CKLHze4M6NwN0NExZols4Vx7Or2Z5rGvrJQ-VksOAYySc3YoY9jM8XyUE~wZBG1b5pgMi5jomq30~f73zXxDYQ__",
      content: 'Responsible for the overall vision, strategy, and direction, ensuring mission and values are upheld while driving growth and innovation.'
    },
    {
      title: 'Kholwani Dube',
      width: "24.5%",
      imgName: "KholwaniDube.jpeg",
      positon: "Project Manager",
      img: "https://s3-alpha-sig.figma.com/img/8b73/bce4/1a524026a5f6befa0ac79dedd45f463a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LuEjbxd2OmpYBtKkc-~4GlqSp5DHJ5nmSCECdA3GTMDcW~v3GWd2eyE07ixmmawrU3HUSMaK9qWN3DOmTtRv0oGeOC835l6FDtrXXjf5TGqYY3aokn26WsgKZDXpPtb1UNvnGsS0DDJDm6UDILxzYKMiUBDwO4D1Lwhkj8lXUfGBpa5twR8zu-hFHUXbV4mX6wab09NmvcT3~mFS2CZFa4IAljTotami-5NF6ekvpDfE7gsybvndteByXfSTkuu-CKLHze4M6NwN0NExZols4Vx7Or2Z5rGvrJQ-VksOAYySc3YoY9jM8XyUE~wZBG1b5pgMi5jomq30~f73zXxDYQ__",
      content: 'Kholwani is a highly capable project manager with over 5 years of experience. He specialises in planning, executing, and delivering projects efficiently, ensuring objectives are met on time and within budget. His strategic approach is key to the success of our healthcare initiatives.'
    },
    {
      title: 'Samson Sokoti',
      width: "24.5%",
      imgName: "Samson Sokoti.jpeg",
      positon: "Graphic Designer",
      img: "https://s3-alpha-sig.figma.com/img/8134/f0f7/00a7d4f0975948c6fae8c96e17c4d4a3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a3G9ZV9dhnA7Dbk~jckFMhigx2Wn~auGK79PoWvBp5gHDxNalK~8PAKo5PGgxkBHhiZijZmuD0SAKB5VMXACNun1gMNwarxoE6AKnP0lQUH8rHRbnYLUPMqaM~qYvwx0YgjYHZGK0S4Ve99~uw8iyzayRYPAoA4QyEWZ6rnUZ-jd6vKGXdU8EM8WS4F5xElnFk1YXLgcYPYcAKlNp2Yci7sM-Y-1gJXFzA6fmLXwytwxeZW745R7Atef1CcRPvryJynuGCsgNempLdmvzA5LRGYdmJ9aKBU~abwTUaJc~iBTs4FovLOgYubvn90H9c2Ll~L0NFOpxIu~ZaNRRfCRLg__",
      content: 'Samson is a creative expert with over 8 years of experience in graphic design. His innovative designs and attention to detail bring our brand and communications to life, leaving a lasting impression on our audience.'
    },
    {
      title: 'Ayomide ',
      width: "24.5%",
      imgName: "ayomide.jpg",
      positon: "Full-Stack Developer",
      img: "https://s3-alpha-sig.figma.com/img/8b73/bce4/1a524026a5f6befa0ac79dedd45f463a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LuEjbxd2OmpYBtKkc-~4GlqSp5DHJ5nmSCECdA3GTMDcW~v3GWd2eyE07ixmmawrU3HUSMaK9qWN3DOmTtRv0oGeOC835l6FDtrXXjf5TGqYY3aokn26WsgKZDXpPtb1UNvnGsS0DDJDm6UDILxzYKMiUBDwO4D1Lwhkj8lXUfGBpa5twR8zu-hFHUXbV4mX6wab09NmvcT3~mFS2CZFa4IAljTotami-5NF6ekvpDfE7gsybvndteByXfSTkuu-CKLHze4M6NwN0NExZols4Vx7Or2Z5rGvrJQ-VksOAYySc3YoY9jM8XyUE~wZBG1b5pgMi5jomq30~f73zXxDYQ__",
      content: 'Ayomide is a talented full-stack developer with 5 years of experience building robust, user-friendly digital solutions. From front-end design to back-end development, his technical expertise ensures seamless functionality across all our digital platforms.'
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
          "height": "230px",
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
          "height": "230px",
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
          "height": "230px",
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
  private http: HttpClient = inject(HttpClient)
  test() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer wwCM7WSflOZSxGLW6tnmteQWbGvmmqH3`,
      'Content-Type': 'application/json'
    });

    this.http.get<any>('https://api.humanisewriter.com/v1/refine', { headers }).subscribe(res => {
      console.warn(res, 'respio')
    });
  }
}
