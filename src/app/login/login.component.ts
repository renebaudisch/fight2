import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() user: User = {
    name: '',
    id: 0,
    pass: ''
  };
  onSubmit(): void {
    this.loginService.login(this.user)
      .subscribe(entries => {
        this.user = entries;
        console.log(this.user);
      });
  }
  constructor(
    private http: HttpClient,
    private loginService: LoginService) {}

  ngOnInit() {
  }

}
