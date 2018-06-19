import { Component, OnInit } from '@angular/core';
import {Routes} from '@angular/router';
import {FlairfireComponent} from '../flairfire/flairfire.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  logoUrl = 'https://adtechnology.axelspringer.com/assets/img/logorot_kl.png';
  admanEntries = ADMANTOOLS;
  adtechEntries = ADTECHTOOLS;
  mainEntries = mainElements;
  isString = function(url) {
    return typeof(url) === 'string';
  };
  constructor() { }

  ngOnInit() {
  }

}

export class NavbarElement {
  url: any;
  name: string;
  target: string;
}

export const ADMANTOOLS: NavbarElement[] = [{
  url: '/tools/ACE/',
  name: 'ACE',
  target: '_top'
}, {
  url: '/tools/catman/',
  name: 'Catman',
  target: '_top'
}, {
  url: '/tools/previewGenerator/',
  name: 'Preview Generator',
  target: '_top'
}, {
  url: '/tools/checkScript/',
  name: 'Redirect Checker',
  target: '_top'
}, {
  url: '/tools/html5integrator/',
  name: 'HTML5 Integrator',
  target: '_top'
}, {
  url: '/tools/VASTchecker/',
  name: 'VAST Checker',
  target: '_top'
}];

export const ADTECHTOOLS: NavbarElement[] = [{
  url: '/tools/VideoStats/',
  name: 'Video Stats',
  target: '_top'
}, {
  url: '/tools/Placemanagement/',
  name: 'Placements',
  target: '_top'
}];

export const mainElements: NavbarElement[] = [{
  url: ADMANTOOLS,
  name: 'Adman Tools',
  target: '',
}, {
  url: ADTECHTOOLS,
  name: 'AdTech Tools',
  target: '',
}, {
  url: 'https://fplanner.mediaimpact.de/',
  name: 'FPlanner',
  target: '_blank',
}, {
  url: 'https://console.appnexus.com/',
  name: 'AppNexus Console',
  target: '_blank',
}];

export const routerConfig: Routes = [
  {
    path: 'flairfire',
    component: FlairfireComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

