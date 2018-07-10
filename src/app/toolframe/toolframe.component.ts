import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../classes/user';

@Component({
  selector: 'app-toolframe',
  templateUrl: './toolframe.component.html',
  styleUrls: ['./toolframe.component.css']
})
export class ToolframeComponent implements OnInit {
  @Input() user: User;
  @Output() userUpdate = new EventEmitter<Object>();
  onUserUpdate(user) {
    this.user = user;
    this.userUpdate.emit(this.user);
  }
  constructor() { }
  ngOnInit() {
  }

}
