import React from 'react';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';

import { about } from '../assets/data';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { Sentence, Image } from '../interfaces';
import { LoadingBox } from '../components/LoadingBox';

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
        <div className="columns">
          {about.map(
            (item, i) =>
              isImage(item) && (
                <a
                  key={i}
                  className="column is-3-tablet is-6-mobile tooltip"
                  href={item.original}
                  data-tooltip={item.description}>
                  <Img
                    className="image-fullwidth rounded"
                    src={item.original}
                    placeholder={<LoadingBox />}
                  />
                </a>
              )
          )}
        </div>
      </ResponsiveContainer>
    </div>
  </section>
);
