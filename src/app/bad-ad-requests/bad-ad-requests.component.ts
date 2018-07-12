import {Component, Input, OnInit} from '@angular/core';
import { BadAdRequestsService } from './bad-ad-requests.services';
import { BadAdRequestsEntry } from '../classes/bad-ad-requests-entry';

@Component({
  selector: 'app-bad-ad-requests',
  templateUrl: './bad-ad-requests.component.html',
  styleUrls: ['./bad-ad-requests.component.css']
})
export class BadAdRequestsComponent implements OnInit {
  @Input() user;
  datepicker = {
    day: new Date().getDay() + 1,
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  };
  filter = {
    text: '',
    publisher: ''
  };
  devices = {
    desktop: true,
    mew: true,
    app: true
  };
  publisherObject = {};
  placementGroupsObject = {};
  publisher = [];
  placementGroups = [];
  loadedList: [BadAdRequestsEntry];
  makeFilterExp = function(str) {
    return new RegExp(str.replace('.', '\.').replace(' ', '.').replace('&', '\&').replace('(', '\(').replace(')', '\)'), 'i');
  };
  loadList = function() {
    this.loadedList = [];
    this.badAdRequestsService.getListByDay(this)
      .subscribe(response => {
        const listObject = {};
        Object.keys(response).sort().forEach(function(key) {
          listObject[key] = response[key];
        });
        const objectArray = [];
        for (const entry in listObject) {
          if (response.hasOwnProperty(entry)) {
            let splittedPlacement = entry.split('-');
            let publisher = '';
            for (let j = 0; j < splittedPlacement.length; j++) {
              if (splittedPlacement[j].indexOf('.') !== -1) {
                publisher = splittedPlacement.splice(0, j + 1).join('-');
                break;
              }

            }
            const device = splittedPlacement.splice(0, 1)[0];
            let placementGroup = '';
            for (let j = 0; j < splittedPlacement.length; j++) {
              if (splittedPlacement[j].indexOf('_') !== -1) {
                placementGroup = splittedPlacement.splice(0, j + 1).join('-');
                break;
              }
            }
            let placement = '';
            if (placementGroup === '') {
              placement = splittedPlacement.splice(-1, 1)[0];
              placementGroup = splittedPlacement.join('-');
            } else if (splittedPlacement.length === 0) {
              splittedPlacement = placementGroup.split('-');
              placementGroup = splittedPlacement.splice(0, 1)[0];
              placement = splittedPlacement.join('-');
            } else {
              placement = splittedPlacement.join('-');
            }
            objectArray.push({
              name: entry,
              device: device,
              publisher: publisher,
              placementGroup: placementGroup,
              placement: placement,
              urls: response[entry].urls,
              count: response[entry].count
            });
          }
        }
        this.loadedList = objectArray;
      });
  };
  toggleURIList = function(clickedNode) {
    const urlList = clickedNode.parentNode.querySelector('ul.urlList');
    if (urlList.innerHTML === '') {
      for (let u = 0; u < this.loadedList[clickedNode.innerHTML].urls.length; u++) {
        if (urlList.innerHTML.indexOf(this.loadedList[clickedNode.innerHTML].urls[u]) === -1) {
          urlList.innerHTML += '<li>' + this.loadedList[clickedNode.innerHTML].urls[u] + '</li>';
        }
      }
    }

    const status = urlList.style.display;
    if (status === 'none') {
      urlList.style.display = 'block';
    } else {
      urlList.style.display = 'none';
    }
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
          for (let i = 0; i < entries.publisher.results.length; i++) {
            this.publisherObject[entries.publisher.results[i].name] = {
              code: entries.publisher.results[i].code,
              id: entries.publisher.results[i].id,
            };
          }
          this.publisher = entries.publisher.results;
        } else {
          alert('error loading publisher');
        }
      });
    this.badAdRequestsService.getPlacementGroups()
      .subscribe(entries => {
        if (entries.site) {
          for (let i = 0; i < entries.site.results.length; i++) {
            this.placementGroupsObject[entries.site.results[i].code] = {
              code: entries.site.results[i].code,
              id: entries.site.results[i].id,
              publisher_id: entries.site.results[i].publisher_id
            };
          }
          this.placementGroups = entries.site.results;
        } else {
          alert('error loading placements');
        }
      });
  }

}
