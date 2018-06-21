import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    name: '',
    id: 0,
    pass: ''
  };
  private nexusApi = 'https://adtechnology.axelspringer.com/node/nexus/post/auth';  // URL to web api
  onSubmit(): void {
    const postData = JSON.stringify({
      username: this.user.name,
      password: this.user.pass
    });
  }
  private log(message: string) {
    this.messageService.add('LoginService: ' + message);
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  ngOnInit() {
  }

}
