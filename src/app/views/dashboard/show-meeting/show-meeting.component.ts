import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MeetingService } from 'src/app/shared/services/meeting.service';

@Component({
  selector: 'app-show-meeting',
  templateUrl: './show-meeting.component.html',
  styleUrls: ['./show-meeting.component.scss']
})
export class ShowMeetingComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private meetigService: MeetingService) { }
  data: any[];
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.data = data['meeting'];
      console.log(this.data[0].city);
    });
  }

}
