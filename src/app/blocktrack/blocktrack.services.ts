import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BlocktrackComponent} from './blocktrack.component';

@Injectable({
  providedIn: 'root'
})

export class BlocktrackService {
  getListByDay(ffComp: BlocktrackComponent): Observable<Object> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.http.get<BlocktrackComponent>('https://adtechnology.axelspringer.com/node/services/BadAdRequests?'
      + 'day=' + ((ffComp.datepicker.day < 10 ? '0' : '') + ffComp.datepicker.day)
      + '&month=' + ((ffComp.datepicker.month < 10 ? '0' : '') + ffComp.datepicker.month)
      + '&year=' + ffComp.datepicker.year, headers);
  }
  constructor(
    private http: HttpClient) {}
}
