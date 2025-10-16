import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICourse } from '../../Interfaces/icourse';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  courses: ICourse[] = [];

  @Input() newCourse!: ICourse;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (!changes['newCourse'].firstChange) {
      this.courses.unshift(this.newCourse);
    }
    console.log(this.courses);
  }
}
