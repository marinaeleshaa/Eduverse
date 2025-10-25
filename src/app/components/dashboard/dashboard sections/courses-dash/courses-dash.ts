import { Component } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import { AddCourseForm } from '../../../add-course-form/add-course-form';
import { UpdateCourseFormComponent } from '../../../update-course-form/update-course-form';

@Component({
  selector: 'app-courses-dash',
  imports: [AddCourseForm, CourseCard, UpdateCourseFormComponent],
  templateUrl: './courses-dash.html',
  styleUrl: './courses-dash.css',
})
export class CoursesDash {
  // newCourseAdded!: ICourse;
  // getData(course: any) {
  //   this.newCourseAdded = course;
  // }
}
