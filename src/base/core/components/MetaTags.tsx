import React from 'react';
import Helmet from 'react-helmet';

import { FULL_NAME, META_IMAGE_URL, HOSTING_URL } from '../../../assets/data';

interface Props {
  name?: string;
  description: string;
  desktop?: boolean;
}

export const MetaTags: React.FC<Props> = ({ name, description, desktop = false }) => {
  const title = (name ? name + ' | ' : '') + FULL_NAME;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={META_IMAGE_URL} />
      <meta property="og:url" content={HOSTING_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={META_IMAGE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={META_IMAGE_URL} />
      {desktop ? (
        <meta name="viewport" content="width=1024" />
      ) : (
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      )}
    </Helmet>
  );
};
