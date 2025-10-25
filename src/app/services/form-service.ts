import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICourse } from '../Interfaces/icourse';

@Injectable({ providedIn: 'root' })
export class FormService {
  private addModalState = new BehaviorSubject<boolean>(false);
  private editModalState = new BehaviorSubject<boolean>(false);

  addModal$ = this.addModalState.asObservable();
  editModal$ = this.editModalState.asObservable();

   private selectedCourseSource = new BehaviorSubject<ICourse | null>(null);
  selectedCourse$ = this.selectedCourseSource.asObservable();

  openAddModal() {
    this.addModalState.next(true);
  }

  closeAddModal() {
    this.addModalState.next(false);
  }

  openEditModal(course: ICourse) {
    if (course) {
    this.selectedCourseSource.next(course);
    }
    this.editModalState.next(true);
  }

  closeEditModal() {
    this.editModalState.next(false);
  }
}

