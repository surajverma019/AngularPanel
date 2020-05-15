import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  baseUrl = 'http://localhost:5000/api/users?likees=true';

  constructor(private http: HttpClient) { }

  getDetails() {
    return this.http.get<any>(this.baseUrl);
  }

}
