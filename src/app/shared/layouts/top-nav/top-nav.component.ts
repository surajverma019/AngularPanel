import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { JwtAuthService } from '../../services/auth/jwt-auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  
  @Input() panelRef: MatSidenav;

  constructor(
    public jwtAuth: JwtAuthService
  ) {

    
  }

  ngOnInit() {
  }

}
