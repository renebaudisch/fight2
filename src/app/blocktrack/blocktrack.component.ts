import {Component, Input, OnInit} from '@angular/core';
import {BadAdRequestsService} from '../bad-ad-requests/bad-ad-requests.services';
import {BlocktrackService} from './blocktrack.services';
import {MessagesService} from '../messages/messages.service';

@Component({
  selector: 'app-blocktrack',
  templateUrl: './blocktrack.component.html',
  styleUrls: ['./blocktrack.component.css']
})
export class BlocktrackComponent implements OnInit {
  os = ['Android', 'iPhone', 'iPad', 'Macintosh', 'X11', 'Windows'];
  browser = ['MSIE', 'Firefox', 'Opera', 'Chrome', 'Safari', 'Playstation'];
  @Input() user;
  datepicker = {
    day: new Date().getDay() + 1,
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  };
  publisherObject = {};
  publisher = [];
  selectedPublisher = '';
  loadDate = function() {
    this.blocktrackService.getListByDay(this)
      .subscribe(result => {
      });
  };
  constructor(private blocktrackService: BlocktrackService,
              private badAdRequestsService: BadAdRequestsService,
              private messageService: MessagesService) { }

  ngOnInit() {
    this.messageService.emit('startRequest');
    this.badAdRequestsService.getPublisher()
      .subscribe(entries => {
        if (entries.publisher) {
          for (let i = 0; i < entries.publisher.results.length; i++) {
            this.publisherObject[entries.publisher.results[i].name] = {
              code: entries.publisher.results[i].code,
              id: entries.publisher.results[i].id,
            };
            this.publisher = entries.publisher.results;
          }
          this.messageService.emit('finishedRequest');
        } else {
          alert('error loading publisher');
        }
      });
  }

}
