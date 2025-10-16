import { Component } from '@angular/core';
import { AddCourseForm } from '../add-course-form/add-course-form';
import { CourseCard } from '../course-card/course-card';
import { ICourse } from '../../Interfaces/icourse';

@Component({
  selector: 'app-courses-dash',
  imports: [AddCourseForm, CourseCard],
  templateUrl: './courses-dash.html',
  styleUrl: './courses-dash.css',
})
export class CoursesDash {
  newCourseAdded!: ICourse;
  getData(course: any) {
    this.newCourseAdded = course;
  }
}
