import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { JwtAuthService } from '../../services/auth/jwt-auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  user: User;
  @Input() panelRef: MatSidenav;
  mySubscription: any;


  roles: string[];
  role: string;
  constructor(
    public jwtAuth: JwtAuthService,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.user = this.jwtAuth.getUserState();

    this.role = this.user.role;
    this.roles = this.user.roles;

    // this.jwtAuth.currentRole.subscribe(role => this.role = role);
    // this.jwtAuth.currentUser.subscribe(roles => this.roles = roles.roles);
  }

  onRoleChanged(role: string) {

    if (this.role !== role) {
      this.role = role;
      this.user.role = role;
      this.jwtAuth.setUserState(this.user);
      this.jwtAuth.user = this.user;
      this.jwtAuth.setUserAndToken(this.jwtAuth.getJwtToken(), this.user, true);
      this.router.navigateByUrl('/sessions/login');
    }
  }

}
