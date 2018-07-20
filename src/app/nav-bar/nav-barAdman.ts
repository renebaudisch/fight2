import { NavbarElement } from './nav-barElement';

export const ADMANTOOLS: NavbarElement[] = [{
  url: '/node/ACE/',
  name: 'ACE',
  target: '_top',
  permissionLevel: 2
}, {
  url: '/node/catman/',
  name: 'Catman',
  target: '_top',
  permissionLevel: 1
}, {
  url: '/node/previewGenerator/',
  name: 'Preview Generator',
  target: '_top',
  permissionLevel: 0
}, {
  url: '/node/checkScript/',
  name: 'Redirect Checker',
  target: '_top',
  permissionLevel: 1
}, {
  url: '/node/html5integrator/',
  name: 'HTML5 Integrator',
  target: '_top',
  permissionLevel: 1
}, {
  url: '/node/VASTchecker/',
  name: 'VAST Checker',
  target: '_top',
  permissionLevel: 1
}];
