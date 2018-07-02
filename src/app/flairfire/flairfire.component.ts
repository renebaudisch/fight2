import { Component, OnInit } from '@angular/core';
import { FlairfireService } from './flairfire.services';

@Component({
  selector: 'app-flairfire',
  templateUrl: './flairfire.component.html',
  styleUrls: ['./flairfire.component.css']
})
export class FlairfireComponent implements OnInit {
  key = '';
  datepicker = {
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  };
  loadList(): void {
    this.flairfireService.getFlairsByDay(this).subscribe(entries => {
      console.log(entries);
    });
  }
  constructor(private flairfireService: FlairfireService) { }

  ngOnInit() {
  }

}
