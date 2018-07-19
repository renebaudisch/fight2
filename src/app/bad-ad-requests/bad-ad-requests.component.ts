import {Component, Input, OnInit} from '@angular/core';
import { BadAdRequestsService } from './bad-ad-requests.services';
import { BadAdRequestsEntry } from './bad-ad-requests-entry';
import {MessagesService} from '../messages/messages.service';
import {UserService} from '../services/user.service';

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
  loadList = function() {
    this.loadedList = [];
    this.messageService.emit('startRequest');
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
        this.messageService.emit('finishedRequest');
      });
  };
  toggleURIList = function(clickedNode) {
    const urlList = clickedNode.querySelector('ul.urlList');
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
  mailEntry = function(id?) {
    const receiver = window.prompt('Please enter email adresses (separated by comma):');
    const postdata = {
      'from': 'adtechnology@axelspringer.de',
      'to': receiver || this.user.mail,
      'cc': 'adtechnology@axelspringer.de,' + this.user.mail,
      'subject': 'adSolutions Bug Report - missing PlacementGroup(s)',
      'text': '<h3>Dear customer</h3><div>Please see attached list of not recognised placementGroup(s)</div><ul>'
    };

    if (id) {
      postdata.text += '<li>' + id + '</li>';
    } else {
      const selected = document.querySelectorAll('#errorList li');
      for (let i = 1; i < selected.length; i++) {
        postdata.text += '<li>' + selected[i].children['0'].innerHTML + '</li>';
      }
    }

    postdata.text += ('</ul>' + this.user.signatureString);

    this.badAdRequestsService.mail(postdata)
      .subscribe(result => {
        this.messageService.add(result.response, 200);
      });
  };
  createPlacement = function(id?) {
  };
  constructor(private badAdRequestsService: BadAdRequestsService,
              private messageService: MessagesService,
              private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user;
    this.messageService.emit('startRequest');
    this.messageService.emit('startRequest');
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
          this.messageService.emit('finishedRequest');
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
          this.messageService.emit('finishedRequest');
        } else {
          alert('error loading placements');
        }
      });
  }

}
