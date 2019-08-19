import { Playlists } from '../../../components/Playlists';
import { Podcasts } from '../../../components/Podcasts';
import { Code } from '../../../components/Code';

export const favorites = [
  {
    name: 'playlists',
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
