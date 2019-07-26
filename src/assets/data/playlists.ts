/**
 * Yes, I know this is a horrible way to show my playlists and it could be so
 * much better. Unfortunately, Spotify has decided to require that all API
 * requests are signed, even for public information such as, well, my public
 * playlists. I don't want to incur server costs just to show music my website,
 * so this is just how it has to be. Thanks, Spotify.
 */

import { Playlist } from '../../interfaces';

export const playlists: Playlist[] = [
  {
    id: '6ESlFMmtKnNoGN5Z7O6djp',
    name: 'Granite',
    image: 'https://pl.scdn.co/images/pl/default/4ceb8ddea5f03140a89c4919eccbc8cfa86609c1',
    songs: 165,
    description: 'Perfect for every suburban kitchen countertop.',
  },
  {
    id: '6dF4GvLTdLRjrBSmgkwTpN',
    name: 'Copper',
    image: 'https://pl.scdn.co/images/pl/default/30b2358a6bc497b28325c345b834b5b898cec43f',
    songs: 100,
    description: 'Known to induce RLS (Repetitive Listening Syndrome).',
  },
  {
    id: '69eA3ES5hqtou8qfbwWQg4',
    name: 'Sandstone',
    image: 'https://pl.scdn.co/images/pl/default/65d4dc4cdfa29427c584d472ee6db2d857c17ade',
    songs: 70,
    description: "Life lesson #42: don't question why you like things.",
  },
  {
    id: '32s41MoT3UXiA8AG1QbjTA',
    name: 'Lithium',
    image: 'https://pl.scdn.co/images/pl/default/5ce8f0c52ffd112136e3f8a956d1264c6527dca4',
    songs: 40,
    description: 'Inject the electricity into my veins, please.',
  },
  {
    id: '7fIRZBjnZbXDWs8RdbqA7k',
    name: 'Amethyst',
    image: 'https://pl.scdn.co/images/pl/default/4f8b71b2e11f2e124055a2ee21706fab57c2a7d8',
    songs: 56,
    description: 'Purple palaces, golden gateways, silver seashores.',
  },
];
