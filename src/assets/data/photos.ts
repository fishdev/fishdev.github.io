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
import cmu_thumb from '../cmu_thumb.jpeg';
import allegheny_thumb from '../allegheny_thumb.jpeg';
import nyc_thumb from '../nyc_thumb.jpeg';
import river_thumb from '../river_thumb.jpeg';
import cathy_thumb from '../cathy_thumb.jpeg';
import convention_thumb from '../convention_thumb.jpeg';
import dusk_thumb from '../dusk_thumb.jpeg';
import flower_thumb from '../flower_thumb.jpeg';
import industry_thumb from '../industry_thumb.jpeg';
import msg_thumb from '../msg_thumb.jpeg';
import rivers_thumb from '../rivers_thumb.jpeg';
import subway_thumb from '../subway_thumb.jpeg';
import tracks_thumb from '../tracks_thumb.jpeg';
import hills_thumb from '../hills_thumb.jpeg';

export const photos: Array<SingletonImage | MultiGroup> = [
  {
    type: 'multi',
    images: [
      {
        original: allegheny,
        thumbnail: allegheny_thumb,
        description: 'Allegheny Landing park',
        id: 0,
      },

      {
        original: cathy,
        thumbnail: cathy_thumb,
        description: 'Cathedral of Learning',
        id: 1,
        tags: ['night'],
      },
      {
        original: dusk,
        thumbnail: dusk_thumb,
        description: 'Skyline at dusk',
        id: 2,
      },
      {
        original: flower,
        thumbnail: flower_thumb,
        description: 'A tulip in downtown',
        id: 3,
      },
    ],
    wide: false,
  },
  {
    type: 'singleton',
    image: {
      original: cmu,
      thumbnail: cmu_thumb,
      description: 'CMU on a snowy night',
      id: 4,
      tags: ['night'],
    },
  },
  {
    type: 'multi',
    images: [
      {
        original: msg,
        thumbnail: msg_thumb,
        description: 'Madison Square Garden and Empire State Building',
        id: 5,
        tags: ['night'],
      },
      {
        original: convention,
        thumbnail: convention_thumb,
        description: 'David L. Lawrence Convention Center',
        id: 6,
      },
      {
        original: industry,
        thumbnail: industry_thumb,
        description: 'Concrete mixer',
        id: 7,
      },
      {
        original: river,
        thumbnail: river_thumb,
        description: 'PNC Park',
        id: 8,
      },
    ],
    wide: true,
  },
  {
    type: 'singleton',
    image: {
      original: rivers,
      thumbnail: rivers_thumb,
      description: 'Skyline from North Shore park',
      id: 9,
    },
  },
  {
    type: 'multi',
    images: [
      {
        original: subway,
        thumbnail: subway_thumb,
        description: 'A subway car approaches...',
        id: 10,
      },
      {
        original: tracks,
        thumbnail: tracks_thumb,
        description: 'Railway tracks from above',
        id: 11,
      },
      {
        original: hills,
        thumbnail: hills_thumb,
        description: 'Coopers Rock, West Virginia',
        id: 12,
      },
      {
        original: nyc,
        thumbnail: nyc_thumb,
        description: 'Radio City Music Hall',
        id: 13,
        tags: ['night'],
      },
    ],
    wide: false,
  },
];
