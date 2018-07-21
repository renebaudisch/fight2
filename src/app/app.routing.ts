import { Routes } from '@angular/router';
import {BadAdRequestsComponent} from './bad-ad-requests/bad-ad-requests.component';
import {BlocktrackComponent} from './blocktrack/blocktrack.component';
import {FlairfireComponent} from './flairfire/flairfire.component';

export const routes: Routes = [
  { path: 'tools/badAdRequests', component: BadAdRequestsComponent},
  { path: 'tools/blocktrack', component: BlocktrackComponent},
  { path: 'tools/flairfire', component: FlairfireComponent}
];

