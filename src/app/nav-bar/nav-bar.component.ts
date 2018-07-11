import {Component, Input, OnInit} from '@angular/core';
import {Routes} from '@angular/router';
import {FlairfireComponent} from '../flairfire/flairfire.component';
import { NavbarElement } from '../classes/nav-barElement';
import { NavBarService } from '../services/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  @Input() user;
  logoUrl = 'https://adtechnology.axelspringer.com/assets/img/logorot_kl.png';
  mainEntries = mainElements;
  isString = function(url) {
    return typeof(url) === 'string';
  };
  getAdmanTools(): void {
    this.navBarService.getAdmanTools()
      .subscribe(entries => this.mainEntries[0].url = entries);
  }
  getAdTechTools(): void {
    this.navBarService.getAdTechTools()
      .subscribe(entries => this.mainEntries[1].url = entries);
  }
  constructor(private navBarService: NavBarService) { }

  ngOnInit() {
    this.getAdmanTools();
    this.getAdTechTools();
  }

}

const mainElements: NavbarElement[] = [{
  url: {},
  name: 'Adman Tools',
  target: '',
}, {
  url: {},
  name: 'AdTech Tools',
  target: '',
}, {
  url: 'https://fplanner.mediaimpact.de/',
  name: 'FPlanner',
  target: '_blank',
  permissionLevel: 0
}, {
  url: 'https://console.appnexus.com/',
  name: 'AppNexus Console',
  target: '_blank',
  permissionLevel: 0
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

