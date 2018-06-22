import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';
import { NavbarElement } from '../nav-bar/nav-barElement';
import { ADMANTOOLS } from '../nav-bar/nav-barAdman';
import { ADTECHTOOLS } from '../nav-bar/nav-barAdtech';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  getAdmanTools(): Observable<NavbarElement[]> {
    this.messageService.add('fetched ADMANTOOLS');
    return of(ADMANTOOLS);
  }
  getAdTechTools(): Observable<NavbarElement[]> {
    this.messageService.add('fetched ADTECHTOOLS');
    return of(ADTECHTOOLS);
  }
  constructor(private messageService: MessageService) { }

}
