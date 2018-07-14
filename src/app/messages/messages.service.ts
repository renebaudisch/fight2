import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages: string[] = [];
  globalMessage: Object = {};
  @Output() emitter = new EventEmitter();

  add(message: string) {
    this.messages.push(message);
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
