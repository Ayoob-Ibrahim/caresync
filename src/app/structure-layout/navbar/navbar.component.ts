import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  menu=[
    {
      title:"Home",
      url:"",
    },
    {
      title:"About Us",
      url:"",
    },
   {
    title:"Our Services",
    children:[  {
      title:"Success Stories",
      url:"",
    },{
      title:"Videos",
      url:"",
    },{
      title:"Brochures",
      url:"",
    },{
      title:"Ebooks",
      url:"",
    },{
      title:"Blogs",
      url:"",
    },{
      title:"FAQ",
      url:"",
    },]
   },


   {
    title:"Our Packages",
    children:[  {
      title:"Success Stories",
      url:"",
    },{
      title:"Videos",
      url:"",
    },{
      title:"Brochures",
      url:"",
    },{
      title:"Ebooks",
      url:"",
    },{
      title:"Blogs",
      url:"",
    },{
      title:"FAQ",
      url:"",
    },]
   },
   

   {
    title:"Tenders",
    url:"",
  },
  {
    title:"Elevate Your Care Services",
    url:"",
  },

  ]

}
