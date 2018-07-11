import { NavbarElement } from './nav-barElement';

export const ADMANTOOLS: NavbarElement[] = [{
  url: '/tools/ACE/',
  name: 'ACE',
  target: '_top',
  permissionLevel: 2
}, {
  url: '/tools/catman/',
  name: 'Catman',
  target: '_top',
  permissionLevel: 1
}, {
  url: '/tools/previewGenerator/',
  name: 'Preview Generator',
  target: '_top',
  permissionLevel: 0
}, {
  url: '/tools/checkScript/',
  name: 'Redirect Checker',
  target: '_top',
  permissionLevel: 1
}, {
  url: '/tools/html5integrator/',
  name: 'HTML5 Integrator',
  target: '_top',
  permissionLevel: 1
}, {
  url: '/tools/VASTchecker/',
  name: 'VAST Checker',
  target: '_top',
  permissionLevel: 1
}];
