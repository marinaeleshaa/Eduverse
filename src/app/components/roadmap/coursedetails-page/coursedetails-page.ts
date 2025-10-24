import { Component, signal, WritableSignal,ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-coursedetails-page',
  imports: [CommonModule,ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './coursedetails-page.html',
  styleUrl: './coursedetails-page.css',
})
export class CoursedetailsPage {

  // toggle display button
  isCollapsed: boolean = true;
  isListCollapsed: boolean = true;

  toggleDescription() {
    this.isCollapsed = !this.isCollapsed;
  }
  toggleList() {
    this.isListCollapsed = !this.isListCollapsed;
  }

  // back button
 

  goBack(): void {
    this.location.back();
  }

  // add review and comment form
  reviewForm: FormGroup;
  // Keep the rating signal for visual state of stars only
  rating: WritableSignal<number> = signal(0); 

  constructor(private location: Location) {
    this.reviewForm = new FormGroup({
      name: new FormControl(''), 
      rating: new FormControl(0, [Validators.required, Validators.min(1)]),
      comment: new FormControl('', [Validators.required]),
    });
  }

  selectRating(newRating: number): void {
    this.rating.set(newRating);
    // Crucially, update the rating FormControl value
    this.reviewForm.controls['rating'].setValue(newRating);
    // Mark as touched to show validation error if rating is 0
    this.reviewForm.controls['rating'].markAsTouched(); 
  }

  submitReview(): void {
    if (this.reviewForm.invalid) {
      console.error('Form is invalid. Please ensure all required fields are filled.');
      this.reviewForm.markAllAsTouched();
      return;
    }
    const formValue = this.reviewForm.value;

    const reviewData = {
      name: formValue.name?.trim() || 'Anonymous User',
      rating: formValue.rating,
      comment: formValue.comment,
      timestamp: new Date().toISOString(),
    };

    console.log('--- Review Submitted (Reactive Form) ---');
    console.log(reviewData);

    this.resetForm();
  }
  
  resetForm(): void {
    this.reviewForm.reset({
      name: '',
      rating: 0,
      comment: ''
    });
    this.rating.set(0); 
  }
}
