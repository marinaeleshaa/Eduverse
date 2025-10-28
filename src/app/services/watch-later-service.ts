import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICourse } from '../Interfaces/icourse';
import { HttpClient } from '@angular/common/http';
import ResponseEntity from '../Interfaces/ResponseEntity';

@Injectable({
  providedIn: 'root',
})
export class WatchLaterService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/api/users/watch-later';
  private courseWatchLater = new BehaviorSubject<ICourse[]>([]);
  watchLater$ = this.courseWatchLater.asObservable();

  toggleCourseToWatchLater(courseId: string): void {
    this.http
      .patch<ResponseEntity>(this.apiUrl, {
        courseId, // we will need the userId ether from the token or explicity
      })
      .subscribe({
        next: (response): void => this.courseWatchLater.next(response.data),
        error: (err): void => console.error(err.message),
      });
  }
  getWatchLaterList(): void {
    this.http
      .get<ResponseEntity>(
        this.apiUrl // we will need the userId ether from the token or explicity
      )
      .subscribe({
        next: (response): void => this.courseWatchLater.next(response.data),
        error: (err): void => console.error(err.message),
      });
  }
}
