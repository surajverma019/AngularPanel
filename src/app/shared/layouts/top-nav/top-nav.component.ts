import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { JwtAuthService } from '../../services/auth/jwt-auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  user: User;
  @Input() panelRef: MatSidenav;

  roles: string[];
  role: string;
  constructor(
    public jwtAuth: JwtAuthService
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
    
    this.role = role;
    this.user.role = role;
    this.jwtAuth.setUserState(this.user);
    this.jwtAuth.user.role = role;
    this.jwtAuth.setUserAndToken(this.jwtAuth.getJwtToken(), this.user, true);

    //this.jwtAuth.setRoleState(role);
  }

}
