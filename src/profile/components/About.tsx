import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { getData } from '../../data';
import { Sentence } from '../interfaces';
import { ResponsiveContainer, Image } from '../../base';
import { MiniGallery, userHasSeenGallery } from '../../gallery';

const isSentence = (obj: any): obj is Sentence => (obj as Sentence).icon !== undefined;

const isImage = (obj: any): obj is Image => (obj as Image).original !== undefined;

export const About: React.FC = () => {
  return (
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
  );
};
