import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FlairfireEntry} from '../classes/flairfireEntry';
import {FlairfireComponent} from './flairfire.component';

@Injectable({
  providedIn: 'root'
})

export class FlairfireService {
  getFlairsByDay(ffComp: FlairfireComponent): Observable<FlairfireEntry> {
    const postData = {
      day: ffComp.datepicker.day,
      month: ffComp.datepicker.month,
      year: ffComp.datepicker.year,
      key: ffComp.key
    };
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.http.post<FlairfireEntry>('https://adtechnology.axelspringer.com/tools/flaifire/data/get.php', postData, headers);
    // return this.http.get<FlairfireEntry>('https://rene.baudisch-berlin.de/test.json', headers);
  }
  constructor(
    private http: HttpClient) {}
}
