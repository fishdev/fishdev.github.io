/**
 * Yes, I know this is a horrible way to show my playlists and it could be so
 * much better. Unfortunately, Spotify has decided to require that all API
 * requests are signed, even for public information such as, well, my public
 * playlists. I don't want to incur server costs just to show music my website,
 * so this is just how it has to be. Thanks, Spotify.
 */

import React from 'react';
import Helmet from 'react-helmet';

import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { playlists } from '../assets/data';
import { PlaylistItem } from '../components/PlaylistItem';

interface State {
  isLoading: boolean;
  playlists: SpotifyApi.PlaylistObjectSimplified[];
}

export const Spotify: React.FC = () => (
  <div>
    <Helmet>
      <title>Spotify Playlists | Ashwin Srinivasan</title>
    </Helmet>
    <section className="hero is-black is-fullheight">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h4 className="title fancy">My Playlists</h4>
          <h5 className="subtitle fancy has-text-grey-light">For your enjoyment</h5>
          <div className="columns is-multiline is-centered">
            {playlists.map(playlist => (
              <div className="column is-6-tablet is-4-desktop is-3-widescreen">
                <PlaylistItem key={playlist.id} {...playlist} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);
