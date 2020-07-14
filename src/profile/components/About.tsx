import React from 'react';
import { Link } from 'react-router-dom';

import { getData } from '../../data';
import { Sentence } from '../interfaces';
import { ResponsiveContainer, Image } from '../../base';
import { MiniGallery, userHasSeenGallery } from '../../gallery';

const isSentence = (obj: any): obj is Sentence => (obj as Sentence).icon !== undefined;

const isImage = (obj: any): obj is Image => (obj as Image).original !== undefined;

export const About: React.FC = () => {
  return (
    <section className="hero is-black is-medium">
      <div className="hero-body fancy">
        <ResponsiveContainer size="large">
          <p className="is-size-4">
            {getData().about.map(
              (item, i) =>
                isSentence(item) && (
                  <React.Fragment key={i}>
                    <span>{item.content}</span>{' '}
                  </React.Fragment>
                )
            )}
          </p>
          <br />
          <MiniGallery
            size="large"
            collection={getData()
              .about.filter(isImage)
              .map((image) => ({ image }))}
          />
          <div className="buttons is-centered">
            {getData().gallery && (
              <Link
                className="button is-outlined is-white has-badge-rounded has-badge-link"
                data-badge={!userHasSeenGallery() ? 'new' : null}
                to="/gallery">
                <span className="icon">
                  <i className="fas fa-images" />
                </span>
                <span>Gallery</span>
              </Link>
            )}
            <Link className="button is-outlined is-white " to="/favorites">
              <span>My favorites</span>
              <span className="icon">
                <i className="fas fa-arrow-right" />
              </span>
            </Link>
          </div>
        </ResponsiveContainer>
      </div>
    </section>
  );
};
