import { Component, OnInit } from '@angular/core';
import { MatSnackBarService } from 'src/app/shared/services/mat-snack-bar.service';

import { PushNotificationService } from 'src/app/shared/services/push-notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string = 'Hellow world';

  constructor(private matBarService: MatSnackBarService,
    private _notificationService: PushNotificationService) {
      _notificationService.requestPermission();
   
  }

  ngOnInit() {
    console.log(123321);
    this.matBarService.showBar('Hellow Mat Bar');
  }

  notify() {
    let data: Array<any> = [];
    data.push({
      'title': 'Approval',
      'alertContent': 'This is First Alert -- By Debasis Saha'
    });
    this._notificationService.generateNotification(data);
  }
}
