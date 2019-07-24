import React from 'react';
import Helmet from 'react-helmet';

import * as spotify from '../util/spotify';
import { Navbar } from '../components/Navbar';
import { Playlist } from '../components/Playlist';

interface State {
  isLoading: boolean;
  playlists: SpotifyApi.PlaylistObjectSimplified[];
}

export class Spotify extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    isLoading: false,
    playlists: [],
  };

  async componentDidMount() {
    this.setState({ isLoading: false, playlists: await spotify.getPlaylists() });
  }

  render() {
    const { isLoading, playlists } = this.state;
    return (
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
              <div className="columns">
                <div className="column is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop is-4-fullhd is-offset-4-fullhd">
                  {!isLoading &&
                    playlists.map(playlist => <Playlist key={playlist.id} {...playlist} />)}
                </div>
              </div>
              {isLoading && 'Loading...'}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
