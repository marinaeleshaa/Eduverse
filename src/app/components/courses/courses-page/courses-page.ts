import { Component ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
interface Course {
  id: number;
  name: string;
  category: string;
  imageSrc: string;
}
@Component({
  selector: 'app-courses-page',
  imports: [RouterLink,FormsModule],
  templateUrl: './courses-page.html',
  styleUrl: './courses-page.css'
})
export class CoursesPage implements OnInit {
   courses: Course[] = [
    {
      id: 101,
      name: 'Advanced TypeScript & Signals',
      category: 'Development',
      imageSrc: 'https://placehold.co/600x400/312e81/ffffff?text=TS+Code',
    },
    {
      id: 102,
      name: 'Tailwind CSS for Angular Developers',
      category: 'Design',
      imageSrc: 'https://placehold.co/600x400/29007A/ffffff?text=Tailwind+UI',
    },
    {
      id: 103,
      name: 'Mastering Reactive Programming (RxJS)',
      category: 'Architecture',
      imageSrc: 'https://placehold.co/600x400/4c1d95/ffffff?text=RxJS+Streams',
    },
    {
      id: 104,
      name: 'Full-Stack with Node.js & NestJS',
      category: 'Backend',
      imageSrc: 'https://placehold.co/600x400/6d28d9/ffffff?text=Node+Database',
    },
  ];
  searchTerm: string = '';
  filteredCourses: Course[] = [];

  ngOnInit() {
    this.filteredCourses = this.courses; // Initialize with all courses
  }

  filterCourses() {
    const term = this.searchTerm.toLowerCase();
    this.filteredCourses = this.courses.filter(course => 
      course.name.toLowerCase().includes(term) || 
      course.category.toLowerCase().includes(term)
    );
  }

}
