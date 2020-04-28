import React from 'react';
import { Link } from 'react-router-dom';

import data from '../../assets/data';
import { Sentence } from '../interfaces';
import { ResponsiveContainer, Image } from '../../base';
import { MiniGallery } from '../../gallery';

const isSentence = (obj: any): obj is Sentence => (obj as Sentence).icon !== undefined;

const isImage = (obj: any): obj is Image => (obj as Image).original !== undefined;

export const About: React.FC = () => (
  <section className="hero is-black is-medium">
    <div className="hero-body fancy">
      <ResponsiveContainer size="large">
        <p className="is-size-4">
          {data.about.map(
            (item, i) =>
              isSentence(item) && (
                <React.Fragment key={i}>
                  <span>{item.content}</span>{' '}
                </React.Fragment>
              )
          )}
        </p>
        <br />
        <div className="columns is-mobile is-multiline">
          <MiniGallery {...{ type: 'multi', images: data.about.filter(isImage), wide: true }} />
        </div>
        <div className="buttons is-centered">
          {data.photos && (
            <Link
              className="button is-outlined is-white has-badge-rounded has-badge-link"
              data-badge={!localStorage.getItem('galleryVisited') ? 'new' : null}
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
