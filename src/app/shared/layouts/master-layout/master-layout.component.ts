import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Location } from "@angular/common";
import { JwtAuthService } from '../../services/auth/jwt-auth.service';
import { User } from '../../models/user.model';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent implements OnInit {

  user: User;
  loading: boolean = false;

  @ViewChild('sidenav') sidenav: MatSidenav;

  hideSidenavAfterClick() {
    if (window.innerWidth <= 768) {
      this.sidenav.toggle();
    }
  }


  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';

  watcher: Subscription;

  constructor(media: MediaObserver,
    private router: Router,
    location: Location,
    jwtAuthService: JwtAuthService) {

    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          console.log('Hide Loader');
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          console.log('Show Loader');
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });


    //this.sidenav = sidenav;
    this.watcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
    this.user = jwtAuthService.getUserState();

  }

  ngOnInit() {
    console.log('-------------------------');
    console.log(this.user);
  }

}
