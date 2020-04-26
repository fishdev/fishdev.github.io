import React from 'react';

import { PageItem } from './PageItem';
import { blocks, favorites } from '../../assets/data';
import { Modal } from './Modal';

interface Props {
  hide: () => void;
}

export const SitemapModal: React.FC<Props> = ({ hide }) => {
  const resume = ['education'].concat(blocks.map((block) => block.name));
  resume.push('skills');

  return (
    <Modal hide={hide}>
      <div className="modal-content">
        <div className="animated faster fadeInDown">
          <h3 className="title has-text-white has-text-centered">Sitemap</h3>
          <div className="columns is-centered is-multiline sitemap">
            <PageItem type="home" path="/" onClick={hide} />
            <PageItem type="gallery" path="/gallery" onClick={hide} />
            <PageItem type="resume" path="/resume" onClick={hide} />
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
      </div>
      <button className="modal-close is-large" onClick={hide} />
    </Modal>
  );
};
