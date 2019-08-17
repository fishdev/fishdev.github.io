import React from 'react';

import { podcasts } from '../assets/data';

export const Podcasts: React.FC = () => (
  <div>
    <div className="columns is-mobile is-multiline is-centered">
      {podcasts.map(podcast => (
        <a
          className="column is-3-tablet is-6-mobile tooltip"
          href={podcast.url}
          data-tooltip={podcast.name}>
          <img className="rounded" src={podcast.image} />
        </a>
      ))}
    </div>
  </div>
);
