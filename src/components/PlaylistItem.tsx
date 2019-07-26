import React from 'react';

import { Playlist } from '../interfaces';

export const PlaylistItem: React.FC<Playlist> = ({ description, id }) => (
  <iframe
    src={'https://open.spotify.com/embed/playlist/' + id}
    width="100%"
    height="380"
    frameBorder="0"
    allowTransparency={true}
    allow="encrypted-media"
  />
);
