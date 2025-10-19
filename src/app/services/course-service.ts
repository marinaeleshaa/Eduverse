import { Injectable } from '@angular/core';
import { ICourse } from '../Interfaces/icourse';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses: ICourse[] = [];

  addCourse(course: ICourse) {
    this.courses.unshift(course);
  }

  deleteCourse(id: string) {
    let course = this.courses.find((c) => c.id === id);
    if (!course) throw new Error('course not found');

    let updatedCourses = this.courses.filter((c) => c.id !== course.id);
    this.courses = updatedCourses;
  }

  updateCourse(course: ICourse) {
    const courseFound = this.courses.find((c) => c.id === course.id);
    if (!courseFound) throw new Error('course not found');

    this.courses = this.courses.map((c) => (c.id === course.id ? { ...course, id: c.id } : c));
  }
}
