import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MeetingService } from '../services/meeting.service';

@Injectable()
export class MeetingResolver implements Resolve<any> {

    constructor(private router: Router,
        private meetingService: MeetingService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.meetingService.getDetails().pipe(
            catchError(error => {
                return of(null);
            })
        );
        // const meetingObservable = new Observable<any>(observer => {
        //     setTimeout(() => {
        //         observer.next({ data: [], message: "Dateils" });
        //     }, 5000);
        // });
        // console.log(meetingObservable)
        // return of(meetingObservable);
    }
}
