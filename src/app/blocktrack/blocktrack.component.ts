import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blocktrack',
  templateUrl: './blocktrack.component.html',
  styleUrls: ['./blocktrack.component.css']
})
export class BlocktrackComponent implements OnInit {
  @Input() user;
  datepicker = {
    day: new Date().getDay() + 1,
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  };
  constructor() { }

  ngOnInit() {
  }

}
