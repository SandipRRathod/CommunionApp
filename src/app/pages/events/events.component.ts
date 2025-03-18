import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventFormComponent } from '../../components/event-form/event-form.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule,FormsModule,EventFormComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  events: any[];
  selectedCategory: string = '';

  categories = ['Religious', 'Social', 'Charity','Technology','Leadership','Discussion'];

  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }

  filteredEvents() {
    return this.selectedCategory
      ? this.events.filter(e => e.category === this.selectedCategory)
      : this.events;
  }

  onEventAdded(event: any) {
    this.eventService.addEvent(event);
  }

  ngOnInit() {
    // Load events from local storage on page load
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      this.events = JSON.parse(savedEvents);
    }
  }

  selectedEvent: any = null;

  openEvent(event: any) {
    this.selectedEvent = event;
  }

  removeEvent(event: any){
   event=localStorage.removeItem('events');

   window.location.reload();
  }
}
