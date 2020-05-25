import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import bootstrapPlugin from '@fullcalendar/bootstrap';


// import interactionPlugin, {
//     ThirdPartyDraggable
// } from "@fullcalendar/interaction";
// import commonPlugin from "@fullcalendar/resource-common";
// import timegridPlugin from "@fullcalendar/resource-timegrid";
// import dayGridResourcePlugin from "@fullcalendar/resource-daygrid";
// import timelinePlugin from "@fullcalendar/resource-timeline";
// import rrulePlugin from "@fullcalendar/rrule";
// import momentPlugin from "@fullcalendar/moment";
// import timezonePlugin from "@fullcalendar/moment-timezone";
//import googlePlugin from "@fullcalendar/google-calendar";

@Component({
  selector: 'app-custom-calender',
  templateUrl: './custom-calender.component.html',
  styleUrls: ['./custom-calender.component.scss']
})
export class CustomCalenderComponent implements OnInit {
  @Input() events: any;
  @ViewChild('fullcalendar') calendarComponent: FullCalendarComponent; // the #calendar in the template


  calendarVisible = true;
  calendarOptions = {
    plugins: [dayGridPlugin,
      timeGridPlugin,
      listPlugin,
      interactionPlugin,
      bootstrapPlugin,
    ],
    customButtons: {
      myCustomButton: {
        text: '+',
        click: function () {
          alert('clicked the custom button!');
        }
      }
    },
    viewRender: function (view) {

    },
    views: {
      dayGridMonth: { // name of view
        titleFormat: {
          year: 'numeric', month: 'long',
        }
      },
      listMonth: { // name of view
        titleFormat: {
          year: 'numeric', month: 'short',
        }
      },
    },
    validRange: function (nowDate) {
      return {
        start: nowDate,
        end: nowDate.clone().add(1, 'months')
      };
    },
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    defaultView: 'dayGridMonth',
    weekends: true,
    editable: true,
    // events: [
    //   { id: 1, title: 'event 1', date: '2020-05-01', textColor: 'white', backgroundColor: '#EC6B4E' },
    //   { id: 2, title: 'event 2', date: '2020-05-02', textColor: 'white', backgroundColor: '#EC6B4E' }
    // ],
    theme: 'bootstrap' // default view, may be bootstrap

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
    alert(model.title + ' Clicked !');
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

  eventRender(info) {
    // console.log('info');
    // console.log(info.view.type);
    if (info.view.type === 'listMonth') {

      //console.log(info);
      var dotEl = info.el.getElementsByClassName('fc-list-item-title')[0];
      //console.log(dotEl.innerText);
      // // Change background color of row
      // info.el.style.backgroundColor = 'red';

      // // Change color of dot marker
      // var dotEl = info.el.getElementsByClassName('fc-event-dot')[0];
      // if (dotEl) {
      //   dotEl.style.backgroundColor = 'white';
      // }
    }

  }

  datesRender(info) {

    document.querySelectorAll('.fc-myCustomButton-button').forEach((button) => {

      if (button.textContent === '+') {
        button.textContent = '';
        button.classList.add('fa');
        button.classList.add('fa-plus');
        button.classList.add('add-meeting');
      }

    });
  }

  calendarEvents = (dates, callback) => {
    console.log('Fetch events for dates:', dates.start, dates.end);

    let resultData = this.callBackend(dates.start, dates.end);
    callback(resultData);
  };

  callBackend(start, end) {

    return [{ "title": "All Day Event", "start": "2020-05-01" },
    { "title": "Long Event", "start": "2020-05-07", "end": "2020-05-10" },
    { "groupId": "999", "title": "Repeating Event", "start": "2020-05-09T16:00:00+00:00" },
    { "groupId": "999", "title": "Repeating Event", "start": "2020-05-16T16:00:00+00:00" },
    { "title": "Conference", "start": "2020-05-21", "end": "2020-05-23" },
    { "title": "Meeting", "start": "2020-05-22T10:30:00+00:00", "end": "2020-05-22T12:30:00+00:00" },
    { "title": "Lunch", "start": "2020-05-22T12:00:00+00:00" },
    { "title": "Birthday Party", "start": "2020-05-23T07:00:00+00:00" },
    { "url": "http:\/\/google.com\/", "title": "Click for Google", "start": "2020-05-28" }
    ]
  }

  constructor() { }

  ngOnInit() {
    console.log('Cal Events');


    if (window.innerWidth <= 768) {
      this.calendarOptions.headerToolbar = {
        left: 'prev,next',
        center: 'title',
        right: 'today myCustomButton'
      };

      this.calendarOptions.defaultView = 'listMonth';

      // this.calendarOptions.views = {
      //   dayGridMonth: { // name of view
      //     titleFormat: {
      //       year: 'numeric', month: 'short',
      //     }
      //   },
      // }
    }
  }
}
