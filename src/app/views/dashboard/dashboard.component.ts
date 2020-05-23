import { Component, OnInit } from '@angular/core';
import { MatSnackBarService } from 'src/app/shared/services/mat-snack-bar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private matBarService : MatSnackBarService) { }

  ngOnInit() {
    console.log(123321);
    this.matBarService.showBar('Hellow Mat Bar');
  }

}
