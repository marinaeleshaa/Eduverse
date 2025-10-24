import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadSection } from "../head-section/head-section";
import { OurMissionComponent } from '../about-page/about sections/our-mission/our-mission.component';
import { OurStoryComponent } from '../about-page/about sections/our-story/our-story.component';
import { OurTeamComponent } from '../about-page/about sections/our-team/our-team.component';
import { WhyChooseUsComponent } from '../about-page/about sections/why-choose-us/why-choose-us.component';
import { OurValuesComponent } from '../about-page/about sections/our-values/our-values.component';
import { Our } from '../about-page/about sections/our/our';



@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, HeadSection ,OurMissionComponent, OurStoryComponent, OurTeamComponent, WhyChooseUsComponent, Our, OurValuesComponent],


  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {}
