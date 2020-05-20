import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from './shared/services/auth/jwt-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin-panel';
  constructor(private jwtAuthService: JwtAuthService) {
  }
  ngOnInit() {

    const token = this.jwtAuthService.getJwtToken();
    const user = this.jwtAuthService.getUser();
    
    if (token && user) {
      this.jwtAuthService.token = token;

      this.jwtAuthService.user = user;
      this.jwtAuthService.setUserState(user);       
    }
  }
}
