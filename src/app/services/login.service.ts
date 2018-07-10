import {Injectable, Input} from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from './message.service';
import {User} from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private nexusApi = 'https://adtechnology.axelspringer.com/node/nexus/post/auth';  // URL to web api
  login(user: User): Observable<User> {
    const postData = {
      username: user.name,
      password: user.pass
    };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.http.post<User>(this.nexusApi, postData, options);
  }
  private log(message: string) {
    this.messageService.add('LoginService: ' + message);
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}
}
