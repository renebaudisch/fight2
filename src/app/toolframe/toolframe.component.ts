import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-toolframe',
  templateUrl: './toolframe.component.html',
  styleUrls: ['./toolframe.component.css']
})
export class ToolframeComponent implements OnInit {
  @Input() user;
  @Output() userUpdate = new EventEmitter<Object>();
  onUserUpdate(user) {
    this.user = user;
    this.userUpdate.emit(this.user);
    this.userService.user = user;
  }
  constructor(private userService: UserService) { }
  ngOnInit() {
  }

}
