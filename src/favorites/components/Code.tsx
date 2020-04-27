import React from 'react';

import { MetaTags, ResponsiveContainer, HorizontalBanner } from '../../base';
import { codes } from '../../assets/data';

export const Code: React.FC = () => (
  <div>
    <MetaTags
      name="Favorites - Code"
      description="A collection of awesome languages and libraries"
    />
    <ResponsiveContainer size="large">
      {codes.map((banner, i) => (
        <React.Fragment key={i}>
          <HorizontalBanner {...banner} />
          <br className="is-hidden-mobile" />
          {i < codes.length - 1 && <br />}
        </React.Fragment>
      ))}
    </ResponsiveContainer>
  </div>
);
