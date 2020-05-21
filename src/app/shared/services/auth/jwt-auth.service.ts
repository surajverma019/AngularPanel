import { Injectable } from "@angular/core";
import { LocalStoreService } from "../local-store.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map, catchError, delay } from "rxjs/operators";
import { User } from "../../models/user.model";
import { of, BehaviorSubject, throwError } from "rxjs";
import { environment } from "../../../../environments/environment";
import { JwtHelperService } from '@auth0/angular-jwt';

// ================= only for demo purpose ===========
const DEMO_TOKEN =
  "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMSIsInVuaXF1ZV9uYW1lIjoiQWRtaW4iLCJyb2xlIjpbIkFkbWluIiwiTW9kZXJhdG9yIl0sIm5iZiI6MTU5MDA3NTg0NSwiZXhwIjoxNTkwMTYyMjQ1LCJpYXQiOjE1OTAwNzU4NDV9.vUnYyfBq7kQBxW4BCV4qoDjfWubv_BGr6wJKgrdP8QV9NFPtK0zbA7G9x9z7wTBPrLFuqRRQ1Ilj0U1IqKihIg";

const DEMO_USER: User = {
  id: "4sa00c45639d2c0c54b354ba",
  displayName: "John Doe",
  roles: ["SA", "RM", "SRM"],
  role: "RM",
};
// ================= you will get those data from server =======

@Injectable({
  providedIn: "root",
})
export class JwtAuthService {
  //signInModel: any = {}
  token;
  isAuthenticated: Boolean;
  user: User;
  user$ = (new BehaviorSubject<User>(this.user));
  //role$ = new BehaviorSubject<string>("");
  readonly currentUser = this.user$.asObservable();
  //readonly currentRole = this.role$.asObservable();


  jwtHelper = new JwtHelperService();
  signingIn: Boolean;
  JWT_TOKEN = "JWT_TOKEN";
  APP_USER = "APP_USER";

  constructor(
    private ls: LocalStoreService,
    private http: HttpClient,
    private router: Router
  ) {

  }
  setUserState(user): void {
    this.user$.next(user);
  }

  getUserState(): User {
    let user: User;
    this.currentUser.subscribe(currentUser => user = currentUser);
    console.log('user bs obj');
    console.log(user);
    if (!user) {
      console.log('user has refreshed the page');
      user = this.getUser();
      this.setUserState(user);

    }
    return user;
  }
  
  public signin(signInModel: any) {
    return of({ token: DEMO_TOKEN, user: DEMO_USER })
      .pipe(
        delay(2000),
        map((res: any) => {
          this.setUserAndToken(res.token, res.user, !!res);
          this.signingIn = false;
          return res;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );

    // FOLLOWING CODE SENDS SIGNIN REQUEST TO SERVER

    //this.signingIn = true;        
    return this.http.post(`${environment.apiUrl}auth/local`, signInModel)
      .pipe(
        map((res: any) => {
          this.setUserAndToken(res.token, res.user, !!res);
          this.signingIn = false;
          return res;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  /*
    checkTokenIsValid is called inside constructor of
    shared/components/layouts/admin-layout/admin-layout.component.ts
  */
  public checkTokenIsValid() {
    return of(DEMO_USER)
      .pipe(
        map((profile: User) => {
          this.setUserAndToken(this.getJwtToken(), profile, true);
          this.signingIn = false;
          return profile;
        }),
        catchError((error) => {
          return of(error);
        })
      );

    /*
      The following code get user data and jwt token is assigned to
      Request header using token.interceptor
      This checks if the existing token is valid when app is reloaded
    */

    // return this.http.get(`${environment.apiURL}/api/users/profile`)
    //   .pipe(
    //     map((profile: User) => {
    //       this.setUserAndToken(this.getJwtToken(), profile, true);
    //       return profile;
    //     }),
    //     catchError((error) => {
    //       return of(error);
    //     })
    //   );
  }

  public signout() {
    this.setUserAndToken(null, null, false);
    this.router.navigateByUrl("sessions/login");
  }

  isLoggedIn(): Boolean {
    const jwtToken = this.getJwtToken();
    //const expirationDate = this.jwtHelper.getTokenExpirationDate(jwtToken);
    //console.log(expirationDate);
    //console.log(jwtToken);
    //console.log(!this.jwtHelper.isTokenExpired(jwtToken));
    return !this.jwtHelper.isTokenExpired(jwtToken);
  }


  getJwtToken() {
    return this.ls.getItem(this.JWT_TOKEN);
  }
  getUser() {
    return this.ls.getItem(this.APP_USER);
  }

  setUserAndToken(token: String, user: User, isAuthenticated: Boolean) {
    this.isAuthenticated = isAuthenticated;
    this.token = token;
    this.user = user;
    this.setUserState(user);
    this.ls.setItem(this.JWT_TOKEN, token);
    this.ls.setItem(this.APP_USER, user);
  }

  roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles = this.user.role;
    allowedRoles.forEach(element => {
      if (userRoles.includes(element)) {
        isMatch = true;
        return;
      }
    });
    return isMatch;
  }
}