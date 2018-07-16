import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Output() globalMessage = new EventEmitter<Object>();
  messageClass: String = '';

  hideBox = function() {
    document.getElementById('#messageBox').style.display = 'none';
  };
  constructor(public messageService: MessagesService) {}

  ngOnInit() {
    this.messageService.emitter.subscribe(event => this.globalMessage.emit(event));
    this.messageService.newClass.subscribe(event => this.messageClass = event);
  }

}
