import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages: string[] = [];
  globalMessage: Object = {};
  @Output() newClass = new EventEmitter();
  @Output() emitter = new EventEmitter();

  add(message: string, statusCode?: number) {
    let statusClass;
    this.messages.push(message);
    switch (statusCode) {
      case 200:
        statusClass = 'success';
        break;
      case 400:
        statusClass = 'error';
        break;
      case 5:
        statusClass = 'warning';
        break;
      default:
        statusClass = '';
    }
    this.newClass.emit(statusClass);
  }

  log(message: string) {
    console.log(message);
  }

  emit(message: string) {
    this.globalMessage = {
      context: message
    };
    this.emitter.emit(this.globalMessage);
  }

  clear() {
    this.messages = [];
  }
}
