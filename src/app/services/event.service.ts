import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  private events :any= [];


  getEvents() {
    return this.events;
  }


  addEvent(newEvent: any) {
    this.events.push(newEvent);

    // Save updated events to local storage if page got reloade then event cant be disappear
    localStorage.setItem('events', JSON.stringify(this.events));
  }
}
