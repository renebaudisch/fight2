import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BadAdRequestsComponent} from './bad-ad-requests.component';
import {BadAdRequestsEntry} from '../classes/bad-ad-requests-entry';
import {BackendResponse} from '../classes/backendResponse';

@Injectable({
  providedIn: 'root'
})

export class BadAdRequestsService {
  getListByDay(ffComp: BadAdRequestsComponent): Observable<BadAdRequestsEntry> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<BadAdRequestsEntry>('https://adtechnology.axelspringer.com/node/services/BadAdRequests?'
      + 'day=' + ffComp.datepicker.day
      + '&month=' + ffComp.datepicker.month
      + '&year=' + ffComp.datepicker.year);
  }
  getPublisher(): Observable<BackendResponse> {
    return this.http.get<BackendResponse>('https://adtechnology.axelspringer.com/node/services/lookup?type=publisher');
  }
  getPlacementGroups(): Observable<BackendResponse> {
    return this.http.get<BackendResponse>('https://adtechnology.axelspringer.com/node/services/lookup?type=site');
  }
  constructor(
    private http: HttpClient) {}
}
