import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICourse } from '../../Interfaces/icourse';
import { CourseService } from '../../services/course-service';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  // courses: ICourse[] = [];

  constructor(private courseService: CourseService) {}

  // use getters to update the ui from service
  get courses() {
    return this.courseService.courses;
  }

  // @Input() newCourse!: ICourse;

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  //   if (!changes['newCourse'].firstChange) {
  //     this.courses.unshift(this.newCourse);
  //   }
  //   console.log(this.courses);
  // }

  stars = [1, 2, 3, 4, 5];

  getStarFill(rate: number, starIndex: number): number {
    const starValue = starIndex * 2; // each star represents 2 points (10 / 5 = 2)
    const prevValue = (starIndex - 1) * 2;
    if (rate >= starValue) return 100; // full
    if (rate <= prevValue) return 0; // empty
    return ((rate - prevValue) / 2) * 100; // partial
  }

  handleDelete(id: string) {
    this.courseService.deleteCourse(id);
  }
}
