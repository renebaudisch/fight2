import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NodeApiService {
  makeRequest(method: string, url: string, postData?: object): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    if (method === 'GET') {
      return this.http.get<any>(url, options);
    } else if (method === 'POST') {
      return this.http.post<any>(url, postData, options);
    } else if (method === 'PUT') {
      return this.http.put<any>(url, postData, options);
    } else if (method === 'DELETE') {
      return this.http.delete<any>(url, options);
    }
  }
  constructor(
    private http: HttpClient) {}
}
