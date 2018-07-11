import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {LoginService} from '../services/login.service';
import {NodeApiService} from '../services/node-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() user;
  @Output() userUpdate = new EventEmitter<Object>();
  onSubmit(): void {
    this.loginService.login(this.user)
      .subscribe(entries => {
        if (entries.status === 'OK') {
          this.user.loggedIn = !0;
          this.user.pass = '';
          this.onLoggedIn();
        } else {
          alert('error user/pass incorrect');
        }
      });
  }
  onLoggedIn(): void {
    this.nodeApiService.makeRequest('GET', 'https://adtechnology.axelspringer.com/node/nexus/get/user?current')
      .subscribe(user => {
        if (user) {
          this.user.nexus = user;
        }
      }, undefined, () => {
        this.getRoles();
      });
  }
  getRoles(): void {
    this.nodeApiService.makeRequest('GET',
      'https://adtechnology.axelspringer.com/node/nexus/get/access-member-user-role?user_id=' + this.user.nexus.id)
      .subscribe(roles => {
        if (roles) {
          for (const el in roles) {
            if (roles.hasOwnProperty(el) && !isNaN(parseInt(el, 10))) {
              switch (roles[el].role_id) {
                case 4:
                  this.user.permissionLevel = 4;
                  break;
                case 434:
                  if (this.user.permissionLevel < 3) {
                    this.user.permissionLevel = 3;
                  }
                  break;
                case 435:
                case 436:
                case 959:
                  if (this.user.permissionLevel < 2) {
                    this.user.permissionLevel = 2;
                  }
                  break;
                case 438:
                case 874:
                case 958:
                case 212920:
                  if (this.user.permissionLevel < 1) {
                    this.user.permissionLevel = 1;
                  }
                  break;
                default:
              }
            }
          }
          this.userUpdate.emit(this.user);
        }
      });
  }
  constructor(
    private loginService: LoginService, private nodeApiService: NodeApiService) {}

  ngOnInit() {
  }

}
