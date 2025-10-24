import { Component } from '@angular/core';
import { YoutubeSlider } from "../youtube-slider/youtube-slider";
import { HeadSection } from "../head-section/head-section";

@Component({
  selector: 'app-services-page',
  imports: [YoutubeSlider, HeadSection],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css'
})
export class ServicesPage {

}
