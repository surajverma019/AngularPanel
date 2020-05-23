import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtAuthService } from 'src/app/shared/services/auth/jwt-auth.service';
import { Location } from "@angular/common";
import { FormControl } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { takeUntil } from "rxjs/operators";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  currentApplicationVersion = environment.appVersion;

  return: string;
  private _unsubscribeAll: Subject<any>;

  model: any = { username: "123123", password: "password" };
  loading: Boolean;

  @ViewChild('loginForm') formRef: FormControl;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private jwtAuthService: JwtAuthService,
    private location: Location) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {

    if (this.jwtAuthService.isLoggedIn())
      this.router.navigateByUrl('/');

    this.route.queryParams
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(params => this.return = params['return'] || '/');

    console.log(this.return);
  }

  signin() {

    if (this.formRef.valid) {
      this.loading = true;
      this.jwtAuthService.signin(this.model)
        .subscribe(response => {
          this.loading = false;
          //alert(this.return);
          this.router.navigateByUrl(this.return);
        }, err => {
          this.loading = false;
          //.errorMsg = err.message;
        })
    }
    return;
  }

}
