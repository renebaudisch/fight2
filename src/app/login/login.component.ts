import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from '../classes/user';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() user: User;
  @Output() userUpdate = new EventEmitter<Object>();
  onSubmit(): void {
    this.loginService.login(this.user)
      .subscribe(entries => {
        if (entries.status === 'OK') {
          this.user.loggedIn = !0;
          document.cookie = 'anToken=' + entries.token + '; domain=' + document.domain + '; path=/';
          this.userUpdate.emit(this.user);
        } else {
          alert('error user/pass incorrect');
        }
      });
  }
  constructor(
    private loginService: LoginService) {}

  ngOnInit() {
  }

}
