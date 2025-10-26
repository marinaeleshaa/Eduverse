import { Injectable } from '@angular/core';
import { ICourse } from '../Interfaces/icourse';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses';
  constructor(private http: HttpClient) {}
  private coursesSubject = new BehaviorSubject<ICourse[]>([]);
  courses$ = this.coursesSubject.asObservable();

  getCourses() {
    this.http.get<ICourse[]>(this.apiUrl).subscribe({
      next: (data) => this.coursesSubject.next(data),
      error: (err) => console.error('Error fetching courses', err),
    });
  }

  addCourse(course: ICourse) {
    this.http.post<ICourse>(this.apiUrl, course).subscribe({
      next: (data) => {
        const current = this.coursesSubject.value;
        this.coursesSubject.next([...current, data]);
      },
      error: (err) => console.error('Error adding course', err),
    });
  }

  deleteCourse(_id: string) {
    console.log('🟡 deleteCourse called with id:', _id);

    this.http.delete(`${this.apiUrl}/${_id}`, { responseType: 'text' }).subscribe({
      next: () => {
        console.log('🟢 Course deleted successfully!');
        const updated = this.coursesSubject.value.filter((c) => c._id !== _id);
        this.coursesSubject.next([...updated]);
        console.log('🟠 BehaviorSubject updated!');
      },
      error: (err) => {
        console.error('🔴 Error deleting course:', err);
      },
      complete: () => {
        console.log('🔵 COMPLETE called');
      },
    });
  }

  updateCourse(course: ICourse) {
    this.http.put<ICourse>(`${this.apiUrl}/${course._id}`, course).subscribe({
      next: (data) => {
        const updatedCourses = this.coursesSubject.value.map((c) =>
          c._id === data._id ? data : c
        );
        this.coursesSubject.next(updatedCourses);
      },
      error: (err) => console.error('Error updating course', err),
    });
  }

  getCourseById(_id: string) {
    this.http.get<ICourse>(`${this.apiUrl}/${_id}`).subscribe({
      next: (data) => {
        return data;
      },
      error: (err) => {
        console.error('Error fetching course by ID', err);
      },
    });
  }
}
