import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 constructor(private route:Router){

 }

 ngOnInit(){
console.log(  this.route)
 }
  menu=[
    {
      title:"Home",
      url:"/home",
    },
    {
      title:"About Us",
      url:"/aboutus",
    },
   {
    title:"Our Services",
    children:[  
      {
      title:"Success Stories",
      url:"",
      img:"https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618873328.svg",
      topics:"Living pluse caring services lt successfully secured six out of seven tenders"
    },{
      title:"Videos",
      url:"",
      img:"https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618873327.svg",
       topics:"Explore our curated video library to stay informed about the last tr"
    },{
      title:"Brochures",
      url:"",
      img:"https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618873330.svg",
       topics:"Explore our exclusive brouchures to learn valuable insights about our.."
    },{
      title:"Ebooks",
      url:"",
      img:"https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618873330-1.svg",
       topics:"Our ebooks serves as in-depth guides to CQC,RQIA,CIW, and Odste"
    },{
      title:"Blogs",
      url:"",
      img:"https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618873332.svg",
       topics:"stay informed with out experts blogs covering the latest updates,tips"
    },{
      title:"FAQ",
      url:"",
      img:"https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618873330-2.svg",
       topics:"Read our most frequently ask questions"
    },
  ]
   },


   {
    title:"Our Packages",
    children:[  
      {
      title:"Success Stories",
      url:"",
      img:"https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618873328.svg",
      topics:"Living pluse caring services lt successfully secured six out of seven tenders"
    },{
      title:"Videos",
      url:"",
      img:"https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618873327.svg",
       topics:"Explore our curated video library to stay informed about the last tr"
    },{
      title:"Brochures",
      url:"",
      img:"https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618873330.svg",
       topics:"Explore our exclusive brouchures to learn valuable insights about our.."
    },{
      title:"Ebooks",
      url:"",
      img:"https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618873330-1.svg",
       topics:"Our ebooks serves as in-depth guides to CQC,RQIA,CIW, and Odste"
    },{
      title:"Blogs",
      url:"",
      img:"https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618873332.svg",
       topics:"stay informed with out experts blogs covering the latest updates,tips"
    },{
      title:"FAQ1",
      url:"",
      img:"https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618873330-2.svg",
       topics:"Read our most frequently ask questions"
    },
  ]
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
isHoverDropDown=false;
}
