import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Output() globalMessage = new EventEmitter<Object>();

  constructor(public messageService: MessagesService) {}

  ngOnInit() {
    this.messageService.emitter.subscribe(event => this.globalMessage.emit(event));
  }

}
