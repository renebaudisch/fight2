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
  mainEntries = mainElements;
  isString = function(url) {
    return typeof(url) === 'string';
  };
  constructor() { }

  ngOnInit() {
  }

}

class NavbarElement {
  url: any;
  name: string;
  target: string;
}

const ADMANTOOLS: NavbarElement[] = [{
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

const ADTECHTOOLS: NavbarElement[] = [{
  url: '/tools/AdGap/',
  name: 'AdGap',
  target: '_top'
}, {
  url: '/tools/badAdRequests/',
  name: 'Bad Ad Requests',
  target: '_top'
}, {
  url: '/tools/blocktrack/',
  name: 'Blocktrack',
  target: '_top'
}, {
  url: '/tools/blocktrack_mobile/',
  name: 'Blocktrack mobile',
  target: '_top'
}, {
  url: '/tools/crawler/',
  name: 'Crawler',
  target: '_top'
}, {
  url: '/tools/flairfire/',
  name: 'Flairfire',
  target: '_top'
}, {
  url: '/tools/ovklib/',
  name: 'OVK Libary',
  target: '_top'
}, {
  url: '/tools/pageSetGen/',
  name: 'PageSet Generator',
  target: '_top'
}, {
  url: '/tools/VideoFillrates/',
  name: 'Video Fillrates',
  target: '_top'
}, {
  url: '/tools/VideoStats/',
  name: 'Video Stats',
  target: '_top'
}, {
  url: '/tools/Placemanagement/',
  name: 'Placements',
  target: '_top'
}];

const mainElements: NavbarElement[] = [{
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

