import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthService } from 'src/app/shared/services/auth/jwt-auth.service';
import { Location } from "@angular/common";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = { username: "123123", password: "password" };
  loading: Boolean;

  @ViewChild('loginForm') formRef: FormControl;

  constructor(private router: Router,
    private jwtAuthService: JwtAuthService,
    private location: Location) { }

  ngOnInit() {
   // if (this.jwtAuthService.isLoggedIn())
      //this.router.navigateByUrl('/');
  }

  signin() {

    if (this.formRef.valid) {
      this.loading = true;
      this.jwtAuthService.signin(this.model)
        .subscribe(response => {
          this.loading = false;
          //alert(this.return);
          this.router.navigateByUrl("/");
        }, err => {
          this.loading = false;
          //.errorMsg = err.message;
        })
    }
    return;
  }

}
