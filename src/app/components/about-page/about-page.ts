import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadSection } from "../head-section/head-section";
import { OurMissionComponent } from '../about sections/our-mission/our-mission.component';
import { OurStoryComponent } from '../about sections/our-story/our-story.component';
import { OurTeamComponent } from '../about sections/our-team/our-team.component';
import { WhyChooseUsComponent } from '../about sections/why-choose-us/why-choose-us.component';
import { OurValuesComponent } from '../about sections/our-values/our-values.component';
import { Our } from '../about sections/our/our';



@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, HeadSection ,OurMissionComponent, OurStoryComponent, OurTeamComponent, WhyChooseUsComponent, Our, OurValuesComponent],


  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {}
