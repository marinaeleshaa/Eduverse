import { Component } from '@angular/core';
import { OurMissionComponent } from '../components/our-mission/our-mission.component';
import { OurStoryComponent } from '../components/our-story/our-story.component';
import { OurTeamComponent } from '../components/our-team/our-team.component';
import { WhyChooseUsComponent } from '../components/why-choose-us/why-choose-us.component';
import { Our } from '../components/our/our';
import { OurValuesComponent } from '../components/our-values/our-values.component';

@Component({
  selector: 'app-about',
  imports: [OurMissionComponent, OurStoryComponent, OurTeamComponent, WhyChooseUsComponent, Our, OurValuesComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
