import React from 'react';
import Img from 'react-image';

import { MetaTags } from './MetaTags';
import { ResponsiveContainer } from './ResponsiveContainer';
import { podcasts } from '../assets/data';
import { LoadingBox } from './LoadingBox';

export const Podcasts: React.FC = () => (
  <div>
    <MetaTags name="Favorites - Podcasts" description="The podcasts I listen to the most" />
    <ResponsiveContainer size="huge">
      <div className="columns is-mobile is-multiline is-centered">
        {podcasts.map(podcast => (
          <a
            key={podcast.name}
            className="column is-3-tablet is-6-mobile tooltip"
            href={podcast.url}
            data-tooltip={podcast.name}>
            <Img className="image-fullwidth rounded" src={podcast.image} loader={<LoadingBox />} />
          </a>
        ))}
      </div>
    </ResponsiveContainer>
  </div>
);
