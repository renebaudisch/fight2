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
    token: '',
    pass: ''
  };
  onSubmit(): void {
    this.loginService.login(this.user)
      .subscribe(entries => {
        this.user.token = entries.token;
        console.log(this.user);
      });
  }
  constructor(
    private loginService: LoginService) {}

  ngOnInit() {
  }

}
