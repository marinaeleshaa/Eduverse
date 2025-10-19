// import { Component, EventEmitter, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { v4 as uuidv4 } from 'uuid';
// import { ICourse } from '../../Interfaces/icourse';
// import { CourseService } from '../../services/course-service';

// @Component({
//   selector: 'app-add-course-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './add-course-form.html',
//   styleUrl: './add-course-form.css',
// })
// export class AddCourseForm {
//   isModalOpen = false;
//   courseForm!: FormGroup;

//   @Output() sendEvent = new EventEmitter();

//   constructor(private fb: FormBuilder , private courseService:CourseService) {
//     this.courseForm = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(3)]],
//       description: ['', [Validators.required, Validators.minLength(10)]],
//       imgUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
//       price: [null, [Validators.required, Validators.min(1)]],
//       hours: [null, [Validators.required, Validators.min(1)]],
//       rate: [null, [Validators.required, Validators.min(1), Validators.max(10)]],
//     });
//   }

//   openModal() {
//     this.isModalOpen = true;
//   }

//   closeModal() {
//     this.isModalOpen = false;
//   }

//   addCourse() {
//     if (this.courseForm.invalid) {
//       this.courseForm.markAllAsTouched();
//       return;
//     }

//     const courseData: ICourse = { ...this.courseForm.value, id: uuidv4() };
//     this.courseService.addCourse(courseData)
//     this.sendEvent.emit(courseData);
//     this.courseForm.reset();
//     this.closeModal();
//   }

//   // Getter for easy access in template
//   get f() {
//     return this.courseForm.controls;
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ICourse } from '../../Interfaces/icourse';
import { CourseService } from '../../services/course-service';
import { FormService } from '../../services/form-service';

@Component({
  selector: 'app-add-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-course-form.html',
  styleUrls: ['./add-course-form.css'],
})
export class AddCourseForm implements OnInit {
  isModalOpen = false;
  courseForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      imgUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      price: [null, [Validators.required, Validators.min(1)]],
      hours: [null, [Validators.required, Validators.min(1)]],
      rate: [null, [Validators.required, Validators.min(1), Validators.max(10)]],
    });

    // نتابع حالة المودال من السيرفس
    this.formService.isModalOpen$.subscribe((state) => {
      this.isModalOpen = state;
    });
  }

  openModal() {
    this.formService.openModal();
  }

  closeModal() {
    this.formService.closeModal();
  }

  addCourse() {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
      return;
    }

    const courseData: ICourse = { ...this.courseForm.value, id: uuidv4() };
    this.courseService.addCourse(courseData);
    this.courseForm.reset();
    this.closeModal();
  }

  get f() {
    return this.courseForm.controls;
  }
}
