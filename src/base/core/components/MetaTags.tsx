import React from 'react';
import Helmet from 'react-helmet';

import { getData } from '../../../data';

interface Props {
  name?: string;
  description: string;
  desktop?: boolean;
}

export const MetaTags: React.FC<Props> = ({ name, description, desktop = false }) => {
  const title = (name ? name + ' | ' : '') + getData().constants.fullName;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={getData().constants.metaImageUrl} />
      <meta property="og:url" content={getData().constants.hostingUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={getData().constants.metaImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={getData().constants.metaImageUrl} />
      {desktop ? (
        <meta name="viewport" content="width=1024" />
      ) : (
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      )}
    </Helmet>
  );
};
