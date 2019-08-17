import { Playlists } from '../../../components/Playlists';
import { Podcasts } from '../../../components/Podcasts';

export const favorites = [
  {
    name: 'playlists',
    component: Playlists,
  },
  {
    name: 'podcasts',
    component: Podcasts,
  },
];

export * from './playlists';
export * from './podcasts';
