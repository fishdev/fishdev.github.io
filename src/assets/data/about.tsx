import React from 'react';
import { Link } from 'react-router-dom';

import { Sentence, Image } from '../../core';
import cmu from '../cmu.jpeg';
import allegheny from '../allegheny.jpeg';
import nyc from '../nyc.jpeg';
import river from '../river.jpeg';
import cmu_thumb from '../cmu_thumb.jpeg';
import allegheny_thumb from '../allegheny_thumb.jpeg';
import nyc_thumb from '../nyc_thumb.jpeg';
import river_thumb from '../river_thumb.jpeg';

export const about: Array<Sentence | Image | {}> = [
  {
    original: cmu,
    thumbnail: cmu_thumb,
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
    original: allegheny,
    thumbnail: allegheny_thumb,
    description: 'Allegheny Landing park',
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
    original: nyc,
    thumbnail: nyc_thumb,
    description: 'Radio City Music Hall',
  },
  {
    icon: 'fas fa-spa',
    content: <span>Juggling and biking in my free time.</span>,
  },
  {
    original: river,
    thumbnail: river_thumb,
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
