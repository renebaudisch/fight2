import { Component, OnInit, Input } from '@angular/core';
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
    pass: '',
    loggedIn: !1,
    token: '',
    status: ''
  };
  onSubmit(): void {
    this.loginService.login(this.user)
      .subscribe(entries => {
        if (entries.status === 'OK') {
          this.user.loggedIn = !0;
          document.cookie = 'anToken=' + entries.token + '; path=/';
        } else {
          alert('erroruser/pass incorrect');
        }
      });
  }
  constructor(
    private loginService: LoginService) {}

  ngOnInit() {
  }

}
