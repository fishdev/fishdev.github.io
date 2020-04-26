import { SingletonImage, MultiGroup } from '../../gallery';

import cmu from '../cmu.jpeg';
import allegheny from '../allegheny.jpeg';
import nyc from '../nyc.jpeg';
import river from '../river.jpeg';
import cathy from '../cathy.jpeg';
import convention from '../convention.jpeg';
import dusk from '../dusk.jpeg';
import flower from '../flower.jpeg';
import industry from '../industry.jpeg';
import msg from '../msg.jpeg';
import rivers from '../rivers.jpeg';
import subway from '../subway.jpeg';
import tracks from '../tracks.jpeg';
import hills from '../hills.jpeg';

export const photos: Array<SingletonImage | MultiGroup> = [
  {
    type: 'multi',
    images: [
      {
        original: allegheny,
        description: 'Allegheny Landing park',
      },

      {
        original: cathy,
        description: 'Cathedral of Learning',
      },
      {
        original: dusk,
        description: 'Skyline at dusk',
      },
      {
        original: flower,
        description: 'A tulip in downtown',
      },
    ],
    wide: false,
  },
  {
    type: 'singleton',
    image: {
      original: cmu,
      description: 'CMU on a snowy night',
    },
  },
  {
    type: 'multi',
    images: [
      {
        original: msg,
        description: 'Madison Square Garden and the Empire State Building',
      },
      {
        original: convention,
        description: 'David L. Lawrence Convention Center',
      },
      {
        original: industry,
        description: 'Concrete mixer',
      },
      {
        original: river,
        description: 'PNC Park',
      },
    ],
    wide: true,
  },
  {
    type: 'singleton',
    image: {
      original: rivers,
      description: 'Skyline from North Shore park',
    },
  },
  {
    type: 'multi',
    images: [
      {
        original: subway,
        description: 'A subway car approaches...',
      },
      {
        original: tracks,
        description: 'Railway tracks from above',
      },
      {
        original: hills,
        description: 'Coopers Rock, West Virginia',
      },
      {
        original: nyc,
        description: 'Radio City Music Hall',
      },
    ],
    wide: false,
  },
];
