import portrait from '../ashwin.jpg';
import { universities } from './education';

export * from './social';
export * from './more';
export * from './about';
export * from './volunteering';
export * from './education';
export * from './blocks';
export * from './skills';
export * from './favorites';
export * from './photos';

export const NAMES = ['Ashwin', 'Srinivasan'];
export const FULL_NAME = NAMES.join(' ');
export const ORGANIZATION = universities[0].name;
export const ROLE = 'Student and developer';
export const PORTRAIT_URL = portrait;
export const LOCATION = 'Pittsburgh, PA';
export const LOCATION_URL = 'https://www.visitpittsburgh.com';
export const HOSTING_DOMAIN = 'fishdev.xyz';
export const HOSTING_URL = 'https://' + HOSTING_DOMAIN;
export const META_IMAGE_URL =
  'https://github.com/fishdev/fishdev.github.io/blob/master/as.png?raw=true';
export const WEBSITE_SOURCE = 'https://github.com/fishdev/fishdev.github.io';
export const EMAIL = 'ashwins@andrew.cmu.edu';
