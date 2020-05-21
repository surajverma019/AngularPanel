import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import bootstrapPlugin from '@fullcalendar/bootstrap';


@Component({
  selector: 'app-custom-calender',
  templateUrl: './custom-calender.component.html',
  styleUrls: ['./custom-calender.component.css']
})
export class CustomCalenderComponent implements OnInit {
  @Input() events: any;
  @ViewChild('fullcalendar') calendarComponent: FullCalendarComponent; // the #calendar in the template


  calendarVisible = true;
  calendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, bootstrapPlugin ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    // events: [
    //   { id: 1, title: 'event 1', date: '2020-05-01', textColor: 'white', backgroundColor: '#EC6B4E' },
    //   { id: 2, title: 'event 2', date: '2020-05-02', textColor: 'white', backgroundColor: '#EC6B4E' }
    // ],
    themeSystem: 'bootstrap' // default view, may be bootstrap

  };

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  eventClick(model) {
    console.log(model);
  }

  eventDragStop(model) {
    console.log(model);
  }


  dateClick(model) {
    if (confirm('Would you like to add an event to ' + model.dateStr + ' ?')) {
      let calendarApi = this.calendarComponent.getApi();

      calendarApi.addEvent({
        title: 'New Event',
        start: model.date,
        allDay: model.allDay
      });
    }
  }

  calendarEvents = (dates, callback) => {
    console.log('Fetch events for dates:', dates.start, dates.end);

    let resultData = this.callBackend(dates.start, dates.end);
    callback(resultData);
  };

  callBackend(start, end) {
    return [
      { id: 1, title: 'event 1', date: '2020-05-01', textColor: 'white', backgroundColor: '#EC6B4E' },
      { id: 2, title: 'event 2', date: '2020-05-02', textColor: 'white', backgroundColor: '#EC6B4E' }
    ];
  }

  constructor() { }

  ngOnInit() {
    console.log('Cal Events');
 

    if (window.innerWidth <= 768) {
      this.calendarOptions.headerToolbar = {
        left: 'prev,next',
        center: 'title',
        right: 'today'
      }
    }
  }

}
