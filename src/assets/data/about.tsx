import React from 'react';
import { Link } from 'react-router-dom';

import { Sentence } from '../../interfaces';
import { Image } from '../../interfaces/Image';
import cmu from '../cmu.jpeg';
import skyline from '../skyline.jpeg';
import path from '../path.jpeg';

export const about: Array<Sentence | Image> = [
  {
    original: cmu,
    description: 'CMU at night. Credit: me',
  },
  {
    icon: 'fas fa-code',
    content: (
      <span>
        I'm a <strong className="gradientbg">full-stack developer</strong> with interests in
        operating systems and computer vision.
      </span>
    ),
  },
  {
    original: skyline,
    description: 'Skyline from Three Rivers Heritage trail. Credit: me',
  },
  {
    icon: 'fas fa-map-marker-alt',
    content: (
      <span>
        Born and raised in <strong className="gradientbg">Pittsburgh, Pennsylvania</strong>.
      </span>
    ),
  },
  {
    original: path,
    description: 'Coopers Rock State Forest. Credit: me',
  },
  {
    icon: 'fas fa-headphones-alt',
    content: (
      <span>
        Always listening to <strong className="gradientbg">music</strong> and{' '}
        <strong className="gradientbg">podcasts</strong>.
      </span>
    ),
    extra: (
      <Link className="button is-small is-outlined is-light" to="/favorites">
        View my favorites
      </Link>
    ),
  },
];
