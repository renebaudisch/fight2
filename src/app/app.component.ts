import { Component } from '@angular/core';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeRequests = 0;
  user: User = {
    name: '',
    pass: '',
    loggedIn: !1,
    mail: '',
    status: '',
    permissionLevel: 0
  };
  onUserUpdate(user) {
    this.user = user;
  }
  onMessageUpdate(msg) {
    if (msg.context === 'startRequest') {
      this.activeRequests++;
    } else if (msg.context === 'finishedRequest') {
      this.activeRequests--;
    }
  }
}
