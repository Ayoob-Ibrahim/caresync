import { CommonModule } from '@angular/common';
import { Component, ViewChild, TemplateRef, AfterViewInit, OnInit } from '@angular/core';
import { verticalTab } from '../../interface/common.interface';

@Component({
  selector: 'app-vertical-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical-tabs.component.html',
  styleUrl: './vertical-tabs.component.scss'
})
export class VerticalTabsComponent implements OnInit {

  current_templ: verticalTab;
  ngOnInit() {
    this.current_templ = {
      data: this.data.web_dev_processes[0],
      index: 0,
    }
  }

  select(template: object, index: number) {
    this.current_templ = { data: template, index: index }
  }


  data = {
    "web_dev_processes": [
      {
        "id": "research",
        "title": "Comprehensive Market Research and Strategic Planning",
        "description": "Effective website development begins with a deep understanding of your target audience and industry trends.",
        "details": [
          {
            "heading": "User Personas",
            "description": "We create detailed profiles based on the preferences and needs of your potential clients."
          },
          {
            "heading": "Competitive Analysis",
            "description": "We assess your competitors to identify opportunities where your website can outshine them."
          },
          {
            "heading": "Keyword Research",
            "description": "We focus on healthcare-specific keywords to drive relevant and targeted traffic to your site."
          }
        ]
      },
      {
        "id": "user_centered",
        "title": "User Centred Website Design",
        "description": "A user-friendly design is essential for keeping visitors engaged and converting them into clients.",
        "details": [
          {
            "heading": "Simple Navigation",
            "description": "Clear menus and logical content structure ensure visitors can easily find what they’re looking for."
          },
          {
            "heading": "Engaging Visuals",
            "description": "We incorporate professional healthcare-related images, videos, and infographics to enhance engagement."
          }
        ]
      },
      {
        "id": "mobile_first",
        "title": "Mobile First and SEO-Optimised Development",
        "description": "With the majority of users accessing websites from mobile devices, it’s crucial that your website is fully mobile responsive.",
        "details": [
          {
            "heading": "Mobile First Design",
            "description": "We create responsive designs that work seamlessly across smartphones, tablets, and desktops."
          },
          {
            "heading": "SEO Best Practices",
            "description": "Our websites are built with SEO at the core. We integrate the right keywords, optimise meta tags, and ensure fast load times."
          }
        ]
      },
      {
        "id": "conversion",
        "title": "Conversion Driven Features",
        "description": "To ensure your website not only attracts visitors but converts them into loyal clients, we incorporate key features.",
        "details": [
          {
            "heading": "Social Media Integration",
            "description": "Connect your website with your social media channels to increase visibility and foster client loyalty."
          },
          {
            "heading": "Job Board Integration",
            "description": "Post job openings directly on your site with an intuitive job board, allowing candidates to apply seamlessly."
          },
          {
            "heading": "Online Applications",
            "description": "Candidates can complete, save, and submit job applications directly through your website."
          },
          {
            "heading": "Traffic Reporting and Analytics",
            "description": "Integrated analytics tools provide insights into your website’s performance."
          },
          {
            "heading": "File Management",
            "description": "Secure cloud storage ensures your business files are available anytime, from anywhere."
          }
        ]
      },
      {
        "id": "compliance",
        "title": "Compliance and Security: Essential for Healthcare Websites",
        "description": "Protecting sensitive client information is a top priority. We implement strict security measures.",
        "details": [
          {
            "heading": "Data Protection",
            "description": "Our websites include SSL certificates, data encryption, and robust protection protocols."
          },
          {
            "heading": "Regular Audits",
            "description": "We conduct routine security audits and updates to ensure your website remains compliant and secure."
          }
        ]
      },
      {
        "id": "content_mgt",
        "title": "Content Management and Ongoing Updates",
        "description": "Keeping your website content fresh and up-to-date is essential for maintaining engagement and optimising SEO.",
        "details": [
          {
            "heading": "CMS Integration",
            "description": "We provide user-friendly content management systems (CMS) like WordPress, allowing you to easily update content."
          },
          {
            "heading": "Ongoing Support and Maintenance",
            "description": "We offer continuous support to ensure your website evolves as your business grows."
          }
        ]
      }
    ]
  }

}
