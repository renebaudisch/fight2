import { Injectable } from '@angular/core';
import { NavbarElement } from '../nav-bar/nav-barElement';
import { ADMANTOOLS } from '../nav-bar/nav-barAdman';
import { ADTECHTOOLS } from '../nav-bar/nav-barAdtech';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  getAdmanTools(): NavbarElement[] {
    return ADMANTOOLS;
  }
  getAdTechTools(): NavbarElement[] {
    return ADTECHTOOLS;
  }
  constructor() { }

}
