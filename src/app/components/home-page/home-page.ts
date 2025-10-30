import { Component, AfterViewInit } from '@angular/core';
import { HomeHeroSection } from '../home-page/home sections/home-hero-section/home-hero-section';
import { ContactUs } from '../contact-us/contact-us';
import { Waves } from '../utils/waves/waves';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { OurStoryComponent } from '../about-page/about sections/our-story/our-story.component';
import { CoachingSection } from './home sections/coaching-section/coaching-section';
import { WhyELearning } from './home sections/why-e-learning/why-e-learning';
import { OurRoadmap } from './home sections/our-roadmaps/our-roadmaps';
import { TeachingMethods } from './home sections/teaching-methods/teaching-methods';

@Component({
  selector: 'app-home-page',
  imports: [
    HomeHeroSection,
    ContactUs,
    Waves,
    OurStoryComponent,
    CoachingSection,
    WhyELearning,
    OurRoadmap,
    TeachingMethods,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements AfterViewInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      // Find the element directly from the window
      const fragment = window.location.hash.replace('#', '');

      if (fragment === 'contactForm') {
        // If there is a fragment, let's scroll to it

        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            const yOffset = -80; // Space for the navbar
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 400);
      } else {
        // If there is no fragment, let's scroll to the top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
