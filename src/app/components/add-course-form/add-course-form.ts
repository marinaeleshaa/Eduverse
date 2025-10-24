import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
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
      category: ['', [Validators.required]],

      // Outline
      outline: this.fb.array([]),
      outlineTitle: [''],
      outlineSubtitle: [''],

      // Conclusion
      conclusion: this.fb.array([]),
      conclusionText: [''],
    });

    this.formService.addModal$.subscribe((state) => {
      this.isModalOpen = state;
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

  addOutlineItem(): void {
    const title = this.f['outlineTitle'].value.trim();
    const subtitle = this.f['outlineSubtitle'].value.trim();

    if (!title || !subtitle) return;

    const newOutline = this.fb.group({
      title: [title, Validators.required],
      subtitle: [subtitle, Validators.required],
    });

    this.outlineArray.push(newOutline);
    this.f['outlineTitle'].reset();
    this.f['outlineSubtitle'].reset();
  }

  removeOutlineItem(index: number): void {
    this.outlineArray.removeAt(index);
  }

  addConclusionItem(): void {
    const text = this.f['conclusionText'].value.trim();
    if (!text) return;

    this.conclusionArray.push(this.fb.control(text, Validators.required));
    this.f['conclusionText'].reset();
  }

  removeConclusionItem(index: number): void {
    this.conclusionArray.removeAt(index);
  }

  addCourse(): void {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
      return;
    }

    const outlineData = this.outlineArray.value.map((item: any) => ({
      title: item.title,
      subtitle: item.subtitle,
    }));

    const conclusionData = this.conclusionArray.value;

    const courseData: ICourse = {
      ...this.courseForm.value,
      id: uuidv4(),
      outline: outlineData,
      conclusion: conclusionData,
    };

    this.courseService.addCourse(courseData);
    this.courseForm.reset();
    this.outlineArray.clear();
    this.conclusionArray.clear();
    this.closeModal();
  }

  openModal() {
    this.formService.openAddModal();
  }

  closeModal() {
    this.formService.closeAddModal();
  } 
}
