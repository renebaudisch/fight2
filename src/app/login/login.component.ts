import { Component, OnInit } from '@angular/core';
import { User } from '../user';

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
  onSubmit(): void {
    console.log(this.user);
  }
  constructor() { }

  ngOnInit() {
  }

}
