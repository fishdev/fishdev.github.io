import React from 'react';
import { Link } from 'react-router-dom';

import { Sentence, Image } from '../../core';
import cmu from '../cmu.jpeg';
import skyline from '../skyline.jpeg';
import path from '../path.jpeg';
import river from '../river.jpeg';

export const about: Array<Sentence | Image | {}> = [
  {
    original: cmu,
    description: 'CMU at night',
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
    description: 'Skyline from Three Rivers Heritage trail',
  },
  {
    icon: 'fas fa-map-marker-alt',
    content: (
      <span>
        Born and raised in <strong className="gradientbg">Pittsburgh, PA</strong>.
      </span>
    ),
  },
  {
    original: path,
    description: 'Coopers Rock State Forest',
  },
  {
    icon: 'fas fa-spa',
    content: <span>Juggling and biking in my free time.</span>,
  },
  {
    original: river,
    description: 'PNC Park',
  },
  {
    icon: 'fas fa-camera',
    content: <span>I have a mild interest in photography.</span>,
  },
  {},
  {
    icon: 'fas fa-headphones-alt',
    content: <span>Always listening to music and podcasts.</span>,
    extra: (
      <Link className="button is-small is-outlined is-light" to="/favorites">
        View my favorites
      </Link>
    ),
  },
];
