import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MeetingService } from '../services/meeting.service';
import { User } from '../models/user.model';
import { JwtAuthService } from '../services/auth/jwt-auth.service';

@Injectable()
export class MasterResolver implements Resolve<User> {

    constructor(private router: Router,
        private jwtAuthService: JwtAuthService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return new Observable<any>(observer => {
            observer.next(this.jwtAuthService.getUserState());
        });

    }
}
