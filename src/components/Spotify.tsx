/**
 * Yes, I know this is a horrible way to show my playlists and it could be so
 * much better. Unfortunately, Spotify has decided to require that all API
 * requests are signed, even for public information such as, well, my public
 * playlists. I don't want to incur server costs just to show music my website,
 * so this is just how it has to be. Thanks, Spotify.
 */

import React from 'react';

import { playlists, spotifyId } from '../assets/data';
import { PlaylistItem } from '../components/PlaylistItem';

export const Spotify: React.FC = () => (
  <div>
    <h4 className="title fancy">My Playlists</h4>
    <h5 className="subtitle fancy has-text-grey-light">For your enjoyment</h5>
    <div className="columns is-multiline is-centered">
      {playlists.map(playlist => (
        <div key={playlist.id} className="column is-6-tablet is-3-widescreen">
          <PlaylistItem key={playlist.id} {...playlist} />
        </div>
      ))}
    </div>
    <a
      className="button is-medium is-success is-outlined"
      href={'https://open.spotify.com/user/' + spotifyId}>
      <span className="icon">
        <i className="fab fa-spotify" />
      </span>
      <span>My Spotify profile</span>
    </a>
  </div>
);
