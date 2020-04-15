import { Playlists, Podcasts, Code } from '../../../favorites/components/';

export const favorites = [
  {
    name: 'music',
    component: Playlists,
  },
  {
    name: 'podcasts',
    component: Podcasts,
  },
  {
    name: 'code',
    component: Code,
  },
];

export * from './playlists';
export * from './podcasts';
export * from './code';
