import React from 'react';

import { PageItem } from './PageItem';
import { blocks, favorites } from '../../assets/data';

interface Props {
  hide: () => void;
}

export const SitemapModal: React.FC<Props> = ({ hide }) => {
  const resume = ['education'].concat(blocks.map((block) => block.name));
  resume.push('skills');

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={hide} />
      <div className="modal-content">
        <h3 className="title has-text-white has-text-centered">Sitemap</h3>
        <div className="columns is-centered is-multiline sitemap">
          <PageItem type="home" path="/" onClick={hide} />
          <PageItem type="about" path="/about" onClick={hide} />
          {resume.map((name) => (
            <PageItem key={name} type="resume" name={name} path={'/' + name} onClick={hide} />
          ))}
          {favorites.map(({ name }) => (
            <PageItem
              key={name}
              type="favorites"
              name={name}
              path={'/favorites/' + name}
              onClick={hide}
            />
          ))}
        </div>
      </div>
      <button className="modal-close is-large" onClick={hide} />
    </div>
  );
};
