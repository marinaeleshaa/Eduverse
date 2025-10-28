import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../../services/course-service';
import { ICourse } from '../../../Interfaces/icourse';
import { Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-courses-page',
  imports: [RouterLink, FormsModule, AsyncPipe],
  templateUrl: './courses-page.html',
  styleUrl: './courses-page.css',
})
export class CoursesPage implements OnInit {
  courses!: Observable<ICourse[]>;
  searchTerm: string = '';
  filteredCourses!: Observable<ICourse[]>;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    // Initialize with all courses
    this.courseService.getCourses();
    this.courses = this.courseService.courses$;
    this.filteredCourses = this.courses;
  }

  filterCourses() {
    const term = this.searchTerm.toLowerCase();

    // Filter the courses based on the search term
    this.filteredCourses = this.courses.pipe(
      map((courses) => courses.filter((course) => course.courseName.toLowerCase().includes(term)))
    );
  }
}
