import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

  events1 = [
    { title: 'event 1', date: '2020-06-01' },
    { title: 'event 2', date: '2020-05-02' }
  ] as any;
  constructor() { }

  ngOnInit() {
  }

}
