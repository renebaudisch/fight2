import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BadAdRequestsComponent} from './bad-ad-requests.component';
import {BadAdRequestsEntry} from './bad-ad-requests-entry';
import {BackendResponse} from './backendResponse';

@Injectable({
  providedIn: 'root'
})

export class BadAdRequestsService {
  getListByDay(ffComp: BadAdRequestsComponent): Observable<BadAdRequestsEntry> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.http.get<BadAdRequestsEntry>('https://adtechnology.axelspringer.com/node/services/BadAdRequests?'
      + 'day=' + ((ffComp.datepicker.day < 10 ? '0' : '') + ffComp.datepicker.day)
      + '&month=' + ((ffComp.datepicker.month < 10 ? '0' : '') + ffComp.datepicker.month)
      + '&year=' + ffComp.datepicker.year, headers);
  }
  getPublisher(): Observable<BackendResponse> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.http.get<BackendResponse>('https://adtechnology.axelspringer.com/node/services/lookup?type=publisher', headers);
  }
  getPlacementGroups(): Observable<BackendResponse> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.http.get<BackendResponse>('https://adtechnology.axelspringer.com/node/services/lookup?type=site', headers);
  }
  mail(postdata): Observable<BackendResponse> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.http.post<BackendResponse>('https://adtechnology.axelspringer.com/node/services/mail', postdata, headers);
  }
  constructor(
    private http: HttpClient) {}
}
