import React from 'react';

import { Playlist } from '../interfaces';

export const PlaylistItem: React.FC<Playlist> = ({ description, id }) => (
  <React.Fragment>
    <iframe
      className="playlist-item rounded"
      allow="autoplay *; encrypted-media *; fullscreen *"
      frameBorder="0"
      height="280"
      width="100%"
      style={{ maxWidth: 660, overflow: 'hidden', background: 'transparent' }}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      title={description || 'Apple Music playlist'}
      src={'https://embed.music.apple.com/us/playlist/pl.u-' + id}></iframe>
  </React.Fragment>
);
