import { Component , signal} from '@angular/core';
import { RouterLink } from '@angular/router';
interface Track {
  id: number;
  name: string;
  imageSrc: string;
  lessons: number;
}
@Component({
  selector: 'app-tracks-page',
  imports: [RouterLink],
  templateUrl: './tracks-page.html',
  styleUrl: './tracks-page.css'
})
export class TracksPage {

 tracks = signal<Track[]>([
    { id: 1, name: 'Advanced TypeScript & Modern JavaScript Patterns', lessons: 45, imageSrc: 'https://placehold.co/600x450/4f46e5/ffffff?text=TypeScript' },
    { id: 2, name: 'Reactive Angular Development with Signals', lessons: 62, imageSrc: 'https://placehold.co/600x450/f97316/ffffff?text=Angular+Signals' },
    { id: 3, name: 'Cloud Architecture: Deployment on Google Cloud', lessons: 38, imageSrc: 'https://placehold.co/600x450/1e40af/ffffff?text=GCP+Deployment' },
    { id: 4, name: 'Data Structures and Algorithms in Python', lessons: 55, imageSrc: 'https://placehold.co/600x450/065f46/ffffff?text=Python+DSA' },
    { id: 5, name: 'State Management with NgRx and RxJS Operators', lessons: 41, imageSrc: 'https://placehold.co/600x450/9333ea/ffffff?text=NgRx+RxJS' },
    { id: 6, name: 'Introduction to Web Accessibility (A11y)', lessons: 28, imageSrc: 'https://placehold.co/600x450/be123c/ffffff?text=A11y' },
    { id: 6, name: 'Introduction to Web Accessibility (A11y)', lessons: 28, imageSrc: 'https://placehold.co/600x450/be123c/ffffff?text=A11y' },
  ]);
}
