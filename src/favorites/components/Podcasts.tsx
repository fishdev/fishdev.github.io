import React from 'react';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';

import { MetaTags, ResponsiveContainer, LoadingBox } from '../../base';
import data from '../../assets/data';

export const Podcasts: React.FC = () => (
  <div>
    <MetaTags name="Favorites - Podcasts" description="The podcasts I listen to the most" />
    <ResponsiveContainer size="large">
      <div className="columns is-mobile is-multiline is-centered">
        {(data.favorites.podcasts || []).map((podcast) => (
          <a
            key={podcast.name}
            className="column is-3-tablet is-6-mobile tooltip hover-expand"
            href={podcast.url}
            data-tooltip={podcast.name}>
            <Img
              className="image-fullwidth rounded"
              src={podcast.image}
              placeholder={<LoadingBox />}
            />
          </a>
        ))}
      </div>
    </ResponsiveContainer>
  </div>
);
