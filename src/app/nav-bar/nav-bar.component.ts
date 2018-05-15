import { Component, OnInit } from '@angular/core';
import {Routes} from '@angular/router';
import {FlairfireComponent} from '../flairfire/flairfire.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

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

