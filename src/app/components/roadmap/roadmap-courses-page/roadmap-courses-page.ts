import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

interface TimelineItem {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-roadmap-courses-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './roadmap-courses-page.html',
  styleUrl: './roadmap-courses-page.css',
})
export class RoadmapCoursesPage {
  timelineData: TimelineItem[] = [
    {
      id: 1,
      title: 'Module 1: Introduction to Web Dev',
      description:
        'Fundamental concepts of HTML5, CSS3, and JavaScript. Understanding the DOM and basic responsive design principles.',
    },
    {
      id: 2,
      title: 'Module 2: Mastering Modern Angular',
      description:
        'Deep dive into Standalone Components, Signals, new Control Flow, and reactive programming with RxJS in Angular.',
    },
    {
      id: 3,
      title: 'Module 3: State Management & APIs',
      description:
        'Implementing robust state management patterns (Context/Services) and fetching/handling data from RESTful and GraphQL APIs.',
    },
    {
      id: 4,
      title: 'Module 4: Deployment & Optimization',
      description:
        'Bundling, lazy loading, performance optimization (Lighthouse scores), and deployment strategies to Vercel/Netlify.',
    },
    {
      id: 5,
      title: 'Module 5: Capstone Project',
      description:
        'Building a full-stack, real-time application using Firestore and advanced Angular features, focusing on quality and scalability.',
    },
  ];
  
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
