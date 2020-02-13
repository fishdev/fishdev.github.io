import React from 'react';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { about } from '../assets/data';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { Sentence, Image } from '../interfaces';
import { LoadingBox } from '../components/LoadingBox';
import { ImageBox } from '../components/ImageBox';

const isSentence = (obj: any): obj is Sentence => (obj as Sentence).icon !== undefined;

const isImage = (obj: any): obj is Image => (obj as Image).original !== undefined;

export const About: React.FC = () => (
  <section className="hero is-black is-medium">
    <div className="hero-body fancy">
      <ResponsiveContainer size="large">
        <p className="is-size-4">
          {about.map(
            (item, i) => isSentence(item) && <span key={i}>{item.content}&nbsp;&nbsp;</span>
          )}
        </p>
        <br />
        <div className="columns is-mobile is-multiline">
          {about.map(
            (item, i) =>
              isImage(item) && (
                <div key={i} className="column is-3-table is-6-mobile">
                  <ImageBox {...item} caption="tooltip" />
                </div>
              )
          )}
        </div>
        <div className="has-text-centered">
          <Link className="button is-outlined is-white " to="/favorites">
            <span>Check out my favorites</span>
            <span className="icon">
              <i className="fas fa-arrow-right" />
            </span>
          </Link>
        </div>
      </ResponsiveContainer>
    </div>
  </section>
);
