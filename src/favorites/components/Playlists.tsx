/**
 * Yes, I know this is a horrible way to show my playlists and it could be so
 * much better. Unfortunately, Spotify has decided to require that all API
 * requests are signed, even for public information such as, well, my public
 * playlists. I don't want to incur server costs just for music on my website,
 * so this is just how it has to be. Thanks, Spotify.
 */

import React from 'react';

import { MetaTags, AnchorButton } from '../../base';
import { getData } from '../../data';
import { PlaylistItem } from '../components/PlaylistItem';

export const Playlists: React.FC = () => (
  <div>
    <MetaTags name="Favorites - Playlists" description="My personal Spotify playlists" />
    <div className="columns is-multiline is-centered">
      {(getData().favorites.music || []).map((playlist) => (
        <div key={playlist.id} className="column is-6-tablet is-3-widescreen">
          <PlaylistItem key={playlist.id} {...playlist} />
        </div>
      ))}
    </div>
    <br />
    <div className="has-text-centered">
      <AnchorButton
        size="medium"
        color="primary"
        rounded={false}
        outlined
        icon="fab fa-apple"
        name="My Music profile"
        url={'https://music.apple.com/profile/' + getData().links.musicId}
      />
    </div>
  </div>
);
