import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course-service';
import { FormService } from '../../services/form-service';
import { ICourse } from '../../Interfaces/icourse';

@Component({
  selector: 'app-update-course-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-course-form.html',
})
export class UpdateCourseFormComponent implements OnInit {
  courseForm!: FormGroup;
  isModalOpen = false;
  selectedCourse: ICourse | null = null;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private formService: FormService
  ) {}

  ngOnInit() {
    // Form with validation
    this.courseForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      imgUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(https?:\/\/[^\s]+)$/),
        ],
      ],
      price: ['', [Validators.required, Validators.min(1)]],
      hours: ['', [Validators.required, Validators.min(1)]],
      category: ['', [Validators.required]],
      outline: this.fb.array([]),
      conclusion: this.fb.array([]),
      outlineTitle: [''],
      outlineSubtitle: [''],
      conclusionText: [''],
    });

    // Subscribe to modal open state
    this.formService.editModal$.subscribe((open) => (this.isModalOpen = open));

    // Subscribe to selected course
    this.formService.selectedCourse$.subscribe((course) => {
      if (course) {
        this.selectedCourse = course;
        this.fillForm(course);
      }
    });
  }

  get f() {
    return this.courseForm.controls;
  }

  get outlineArray(): FormArray {
    return this.courseForm.get('outline') as FormArray;
  }

  get conclusionArray(): FormArray {
    return this.courseForm.get('conclusion') as FormArray;
  }

  addOutlineItem() {
    const title = this.courseForm.get('outlineTitle')?.value;
    const subtitle = this.courseForm.get('outlineSubtitle')?.value;
    if (title && subtitle) {
      this.outlineArray.push(this.fb.group({ title, subtitle }));
      this.courseForm.patchValue({ outlineTitle: '', outlineSubtitle: '' });
    }
  }

  removeOutlineItem(i: number) {
    this.outlineArray.removeAt(i);
  }

  addConclusionItem() {
    const text = this.courseForm.get('conclusionText')?.value;
    if (text) {
      this.conclusionArray.push(this.fb.control(text));
      this.courseForm.patchValue({ conclusionText: '' });
    }
  }

  removeConclusionItem(i: number) {
    this.conclusionArray.removeAt(i);
  }

  private fillForm(course: ICourse) {
    this.outlineArray.clear();
    this.conclusionArray.clear();

    this.courseForm.patchValue({
      id: course.id,
      name: course.name,
      description: course.description,
      imgUrl: course.imgUrl,
      price: course.price,
      hours: course.hours,
      category: course.category,
    });

    if (course.outline?.length) {
      course.outline.forEach((item) =>
        this.outlineArray.push(this.fb.group({ title: item.title, subtitle: item.subtitle }))
      );
    }

    if (course.conclusion?.length) {
      course.conclusion.forEach((text) => this.conclusionArray.push(this.fb.control(text)));
    }
  }

  closeModal() {
    this.formService.closeEditModal();
  }

  updateCourse() {
    if (this.courseForm.invalid) return;
    const updatedCourse: ICourse = this.courseForm.value;
    this.courseService.updateCourse(updatedCourse);
    this.closeModal();
  }
}
