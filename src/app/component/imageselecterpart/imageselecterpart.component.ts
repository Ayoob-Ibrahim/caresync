import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GetstartedcardComponent } from '../getstartedcard/getstartedcard.component';
import { TiltComponent } from '../tilt/tilt.component';


@Component({
  selector: 'app-imageselecterpart',
  imports: [CommonModule,GetstartedcardComponent,TiltComponent],
  templateUrl: './imageselecterpart.component.html',
  styleUrl: './imageselecterpart.component.scss'
})
export class ImageselecterpartComponent {
  selectedImage=0;
  imagesforTilt=[
    "https://caresyncexperts.com/wp-content/uploads/2024/12/Frame-1618869768.png",
    "https://caresyncexperts.com/wp-content/uploads/2024/12/front-view-colleagues-working-covid-2-1.png",
    "https://caresyncexperts.com/wp-content/uploads/2024/12/front-view-colleagues-working-covid-2.png"
  ]

getstartedData=[
  {title:"Kickstart Your Ideal Care Business with Confidence ",content:"Make use of our expert guidance, personalised assistance and thorough training to bring your vision of a care business to fruition.",button:"Get Started"},
  {title:"Integrated Support for Startups in Health and Social Care",content:"Collaborate with us for encompassing solutions that ensure the success of your care agency from the beginning.",button:"Discover"},
  {title:"Arm Your Business with Essential Tools and Expert Knowledge ",content:"Gain access to a set of resources tailored to establish long term success for your care business.",button:"Dive Into Solutions"}
]
selectedImages(event){
this.selectedImage=event;
}

}
