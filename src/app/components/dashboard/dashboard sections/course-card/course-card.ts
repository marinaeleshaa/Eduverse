import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CourseService } from '../../../../services/course-service';
import { FormService } from '../../../../services/form-service';
import { ICourse } from '../../../../Interfaces/icourse';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-card',
  imports: [AsyncPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnInit {
  courses$!: Observable<ICourse[]>;

  constructor(private courseService: CourseService, private formService: FormService) {}
  ngOnInit() {
    this.courseService.getCourses();
    this.courses$ = this.courseService.courses$; // directly assign once
  }


  stars = [1, 2, 3, 4, 5];

  getStarFill(rate: number, starIndex: number): number {
    const starValue = starIndex * 2; // each star represents 2 points (10 / 5 = 2)
    const prevValue = (starIndex - 1) * 2;
    if (rate >= starValue) return 100; // full
    if (rate <= prevValue) return 0; // empty
    return ((rate - prevValue) / 2) * 100; // partial
  }

 handleDelete(id: string) {
  console.log('🧩 handleDelete clicked for id:', id); // 3️⃣ check button click
  this.courseService.deleteCourse(id);
}


  @Input() course!: ICourse;

  openUpdateForm(course: ICourse) {
    this.formService.openEditModal(course);
  }
}
