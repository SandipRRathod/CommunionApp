import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
  @Output() eventAdded = new EventEmitter<any>();

  newEvent = { title: '', date: '', location: '', category: '' ,description:''};
  categories = ['Religious', 'Social', 'Charity','Technology','Leadership','Discussion'];
  submitEvent() {
    if (this.newEvent.title && this.newEvent.date && this.newEvent.location && this.newEvent.category) {
      this.eventAdded.emit(this.newEvent);
      this.newEvent = { title: '', date: '', location: '', category: '', description:''}; // Reset form
    }
  }
}
