import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import * as http from 'http';

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
  apiUser = {};
  onSubmit(): void {
    const postData = JSON.stringify({
      username: this.user.name,
      password: this.user.pass
    });
    const options = {
      protocol: 'https:',
      hostname: 'adtechnology.axelspringer.com',
      port: 443,
      path: '/node/nexus/post/auth',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const req = http.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        this.apiUser = JSON.stringify(chunk);
      });
      res.on('end', () => {
        console.log('No more data in response.');
      });

    });

    req.on('error', (e) => {
      console.log(e.message);
    });

    req.end();
  }
  constructor() {}

  ngOnInit() {
  }

}
