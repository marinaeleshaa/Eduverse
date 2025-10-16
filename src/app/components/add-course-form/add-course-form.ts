import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICourse } from '../../Interfaces/icourse';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-course-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-course-form.html',
  styleUrl: './add-course-form.css',
})
export class AddCourseForm {
  isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  course: ICourse = {
    name: '',
    description: '',
    imgUrl: '',
    price: null,
    hours: null,
    rate: null,
  };

  @Output() sendEvent = new EventEmitter();

  addCourse() {
    this.sendEvent.emit({ ...this.course, id: uuidv4() });
    this.closeModal();
    this.course = {
      name: '',
      description: '',
      imgUrl: '',
      price: null,
      hours: null,
      rate: null,
    };
  }
}
