/**
 * Yes, I know this is a horrible way to show my playlists and it could be so
 * much better. Unfortunately, Spotify has decided to require that all API
 * requests are signed, even for public information such as, well, my public
 * playlists. I don't want to incur server costs just to show music my website,
 * so this is just how it has to be. Thanks, Spotify.
 */

import React from 'react';

import { MetaTags } from './MetaTags';
import { playlists, spotifyId } from '../assets/data';
import { PlaylistItem } from '../components/PlaylistItem';
import { Button } from './Button';

export const Playlists: React.FC = () => (
  <div>
    <MetaTags name="Favorites - Playlists" description="My personal Spotify playlists" />
    <div className="container">
      <div className="columns is-multiline is-centered">
        {playlists.map(playlist => (
          <div key={playlist.id} className="column is-6-tablet is-3-widescreen">
            <PlaylistItem key={playlist.id} {...playlist} />
          </div>
        ))}
      </div>
      <div className="has-text-centered">
        <Button
          size="medium"
          color="success"
          rounded={false}
          outlined={false}
          icon="fab fa-spotify"
          name="My Spotify profile"
          url={'https://open.spotify.com/user/' + spotifyId}
        />
      </div>
    </div>
  </div>
);
