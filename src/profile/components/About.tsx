import React from 'react';
import { Link } from 'react-router-dom';

import { about } from '../../assets/data';
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
          {about.map(
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
          <MiniGallery {...{ type: 'multi', images: about.filter(isImage), wide: true }} />
        </div>
        <div className="buttons is-centered">
          <Link className="button is-outlined is-white " to="/gallery">
            <span className="icon">
              <i className="fas fa-images" />
            </span>
            <span>
              Gallery
              {!localStorage.getItem('galleryVisited') && (
                <sup className="has-text-success"> new</sup>
              )}
            </span>
          </Link>
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
