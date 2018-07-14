import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../messages/messages.service';
import { NavbarElement } from './nav-barElement';
import { ADMANTOOLS } from './nav-barAdman';
import { ADTECHTOOLS } from './nav-barAdtech';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  getAdmanTools(): Observable<NavbarElement[]> {
    this.messageService.log('fetched ADMANTOOLS');
    return of(ADMANTOOLS);
  }
  getAdTechTools(): Observable<NavbarElement[]> {
    this.messageService.log('fetched ADTECHTOOLS');
    return of(ADTECHTOOLS);
  }
  constructor(private messageService: MessagesService) { }

}
