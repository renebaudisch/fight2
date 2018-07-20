import { Routes } from '@angular/router';
import {BadAdRequestsComponent} from './bad-ad-requests/bad-ad-requests.component';
import {BlocktrackComponent} from './blocktrack/blocktrack.component';
import {FlairfireComponent} from './flairfire/flairfire.component';

export const routes: Routes = [
  { path: 'node/badAdRequests', component: BadAdRequestsComponent},
  { path: 'node/blocktrack', component: BlocktrackComponent},
  { path: 'node/flairfire', component: FlairfireComponent}
];

