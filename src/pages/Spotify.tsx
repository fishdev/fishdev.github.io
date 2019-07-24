import React from 'react';
import Helmet from 'react-helmet';

import * as spotify from '../util/spotify';
import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
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
            <ResponsiveContainer size="medium">
              {!isLoading &&
                playlists.map(playlist => <Playlist key={playlist.id} {...playlist} />)}
              {isLoading && 'Loading...'}
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    );
  }
}
