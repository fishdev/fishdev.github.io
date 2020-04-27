import React from 'react';
import { Link } from 'react-router-dom';

import { Sentence, Image } from '../../core';
import { photoPaths } from './photos';

export const about: Array<Sentence | Image | {}> = [
  {
    ...photoPaths.cmu,
    description: 'CMU on a snowy night',
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
    ...photoPaths.allegheny,
    description: 'Allegheny Landing park',
  },
  {
    icon: 'fas fa-map-marker-alt',
    content: (
      <span>
        Born and raised in <strong className="gradientbg">Pittsburgh,</strong>{' '}
        <strong className="gradientbg">PA</strong>.
      </span>
    ),
  },
  {
    ...photoPaths.nyc,
    description: 'Radio City Music Hall',
  },
  {
    icon: 'fas fa-spa',
    content: <span>Juggling and biking in my free time.</span>,
  },
  {
    ...photoPaths.river,
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
