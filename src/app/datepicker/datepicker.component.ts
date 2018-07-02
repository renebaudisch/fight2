import { Component, OnInit, Input } from '@angular/core';
import { SelectedDate } from './selectedDate';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  dayArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  monthArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  yearArray = [];
  @Input() actualSelection: SelectedDate;
  constructor() { }

  ngOnInit() {
    this.actualSelection.day = new Date().getDay() + 1;
    this.actualSelection.month = new Date().getMonth() + 1;
    this.actualSelection.year = new Date().getFullYear();
    for (let i = this.actualSelection.year; i > this.actualSelection.year - 10; i--) {
      this.yearArray.push(i);
    }
  }

}
