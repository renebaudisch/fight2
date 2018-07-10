import {Component, Input, OnInit} from '@angular/core';
import { BadAdRequestsService } from './bad-ad-requests.services';
import { BadAdRequestsEntry } from '../classes/bad-ad-requests-entry';
import { User } from '../classes/user';

@Component({
  selector: 'app-bad-ad-requests',
  templateUrl: './bad-ad-requests.component.html',
  styleUrls: ['./bad-ad-requests.component.css']
})
export class BadAdRequestsComponent implements OnInit {
  @Input() user: User;
  datepicker = {
    day: new Date().getDay() + 1,
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  };
  filter = {
    text: '',
    publisher: ''
  };
  devices: {
    desktop: true,
    mew: true,
    app: true
  };
  publisher = [];
  placementGroups = [];
  loadedList: [BadAdRequestsEntry];
  makeFilterExp = function(str) {
    return new RegExp(str.replace('.', '\.').replace(' ', '.').replace('&', '\&').replace('(', '\(').replace(')', '\)'), 'i');
  };
  searchItem = function(str) {
    // ASCDP.startLoadLayer();
    this.filter = (this.publisher ? '^' + this.publisher + '.*' : '') + str;
    const searchExp = this.makeFilterExp(this.filter);
    const toFilter = document.querySelectorAll('#errorList li[list]' + ((this.filter) ? '' : '.hidden'));
    for (const x in toFilter) {
      if (toFilter.hasOwnProperty(x)) {
        const name = toFilter[x].getAttribute('list') || '';
        if (this.filter && !name.match(searchExp)) {
          if (toFilter[x].getAttribute('class') && !toFilter[x].getAttribute('class').match('hidden')) {
            toFilter[x].setAttribute('class', toFilter[x].getAttribute('class') + ' hidden');
          }
        } else if (toFilter[x].getAttribute('class')) {
          toFilter[x].setAttribute('class', toFilter[x].getAttribute('class').replace(/hidden/gi, ''));
        }
      }
    }
    // ASCDP.stopLoadLayer();
  };
  loadList = function() {
  };
  mailEntry = function(id) {
  };
  createPlacement = function(id) {
  };
  constructor(private badAdRequestsService: BadAdRequestsService) { }

  ngOnInit() {
    this.badAdRequestsService.getPublisher()
      .subscribe(entries => {
        if (entries.publisher) {
          this.publisher = entries.publisher.results;
          console.log(this.publisher);
        } else {
          alert('error loading publisher');
        }
      });
    this.badAdRequestsService.getPlacementGroups()
      .subscribe(entries => {
        if (entries.site) {
          this.placementGroups = entries.site.results;
          console.log(this.placementGroups);
        } else {
          alert('error loading placements');
        }
      });
  }

}
