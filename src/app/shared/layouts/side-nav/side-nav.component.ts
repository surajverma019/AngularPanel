import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  
  hideSidenavAfterClick() {
    if (window.innerWidth <= 768) {
      this.sidenav.toggle();
    }
  }

  //@Output() _sc = new EventEmitter<MatSidenav>();

  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  // overlap = false;

  //isLoggedIn$: Observable<boolean>;

  watcher: Subscription;

  constructor(media: MediaObserver,
    private router: Router,
    location: Location) {

    this.watcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
    console.log();
  }



  ngOnInit() {
  }

}
