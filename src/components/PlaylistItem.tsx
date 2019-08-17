import React from 'react';

import { Playlist } from '../interfaces';
import { ResponsiveContainer } from './ResponsiveContainer';

export const PlaylistItem: React.FC<Playlist> = ({ description, id }) => (
  <React.Fragment>
    <iframe
      className="playlist-item rounded"
      src={'https://open.spotify.com/embed/playlist/' + id}
      width="100%"
      height="380"
      frameBorder="0"
      allow="encrypted-media"
    />
    <p className="has-text-grey has-text-centered">{description}</p>
  </React.Fragment>
);
