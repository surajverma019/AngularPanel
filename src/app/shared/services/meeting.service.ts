import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  results: any;
  baseUrl = 'http://localhost:5000/api/users?likees=true';

  constructor(private http: HttpClient) { }

  getDetails(): any {
    return this.http.get<any>(this.baseUrl);
  }

}
