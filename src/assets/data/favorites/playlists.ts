/**
 * Yes, I know this is a horrible way to show my playlists and it could be so
 * much better. Unfortunately, Spotify has decided to require that all API
 * requests are signed, even for public information such as, well, my public
 * playlists. I don't want to incur server costs just to show music my website,
 * so this is just how it has to be. Thanks, Spotify.
 */

import { Playlist } from '../../../favorites';

export const playlists: Playlist[] = [
  {
    id: '6ESlFMmtKnNoGN5Z7O6djp',
    description: 'Perfect for every suburban kitchen countertop.',
  },
  {
    id: '6dF4GvLTdLRjrBSmgkwTpN',
    description: 'Known to induce RLS (Repetitive Listening Syndrome).',
  },
  {
    id: '69eA3ES5hqtou8qfbwWQg4',
    description: "Life lesson #42: don't question why you like things.",
  },
  {
    id: '32s41MoT3UXiA8AG1QbjTA',
    description: 'Inject the electricity into my veins, please.',
  },
];

export const spotifyId = 'g5ojwey9iyo08skvmjnx3dih3';
