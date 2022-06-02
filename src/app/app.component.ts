import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

interface Home{
  title:string;
  subtitle:string;
  image:string;
}

@Component  ({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'Last Notices';
  public Notices: Home[]=[];
  
  ngOnInit(): void {

    this.Notices = [
     {title:'Engineer Job', subtitle: 'Do you like the Networks & Electronic? This is your Job', image:"https://i.ytimg.com/vi/PSD5pFi6bx4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRXrJxTLALTsBas1djapMjtW0lQg"},
     {title:'Web Developer Job', subtitle: 'Creativity, ingenuity, to resolve problems.... Are you ready?', image:"https://i.ytimg.com/vi/rOsd3OI9dOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdMDLcELCLzlSzVoELr-QZ41mL8g"},
     {title:'Lifeguard Job for Summer Work & Travel', subtitle: 'Work with as and have a great Summer in USA', image:"https://i.ytimg.com/vi/lasGrvRYBWg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgh8fipV-k2f4xjEEPpvvtiWHwjA"},
    ]
 }

  constructor(private translate: TranslateService) {    
      translate.setDefaultLang('en');    
      translate.use('en');  
  }
}
