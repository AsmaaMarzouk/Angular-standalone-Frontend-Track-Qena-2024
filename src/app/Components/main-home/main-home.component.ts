import { Component } from '@angular/core';
import { TrackInfo } from '../../Models/track-info';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent {
// firstTitle:string="title one";
// sayHello(){
//   return `Hello ${this.firstTitle}`;
// }

// use class model
track:TrackInfo=new TrackInfo("Frontend","https://img.freepik.com/free-vector/frontend-developer-typographic-header-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-304.jpg",44,["html","css","JS"]);
// track2:TrackInfo=new TrackInfo("MEARN",44,["Node js","css","JS"]);
inputValue:string="ahmed";

toggleimg:boolean=true;

toggleImg(){
  this.toggleimg=!this.toggleimg;
}
}
