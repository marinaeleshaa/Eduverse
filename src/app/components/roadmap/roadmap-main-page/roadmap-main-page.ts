import { Component } from '@angular/core';
import { YoutubeSlider } from "../../youtube-slider/youtube-slider";
import { HeadSection } from "../../head-section/head-section";
import { RouterModule, RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-roadmap-main-page',
  imports: [YoutubeSlider, HeadSection, RouterModule, RouterOutlet],
  templateUrl: './roadmap-main-page.html',
  styleUrl: './roadmap-main-page.css'
})
export class RoadmapMainPage {

}
