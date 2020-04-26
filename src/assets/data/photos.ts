import { ImageCollection } from '../../gallery';

const titles = [
  'allegheny',
  'brick',
  'butterfly',
  'cathy',
  'cmu',
  'convention',
  'dusk',
  'flower',
  'grafitti',
  'hills',
  'houses',
  'industry',
  'lot',
  'msg',
  'mural',
  'nyc',
  'pathway',
  'river',
  'rivers',
  'sunset',
  'street',
  'subway',
  'tracks',
  'village',
];
export const photoPaths = Object.fromEntries(
  titles.map((title) => [
    title,
    {
      original: process.env.PUBLIC_URL + '/gallery/' + title + '.jpeg',
      thumbnail: process.env.PUBLIC_URL + '/gallery/' + title + '_thumb.jpeg',
    },
  ])
);

export const photos: ImageCollection = [
  {
    type: 'multi',
    images: [
      {
        ...photoPaths.allegheny,
        description: 'Allegheny Landing park',
      },

      {
        ...photoPaths.cathy,
        description: 'Cathedral of Learning',
        tags: ['night'],
      },
      {
        ...photoPaths.dusk,
        description: 'Skyline at dusk',
        tags: ['skyline'],
      },
      {
        ...photoPaths.flower,
        description: 'A tulip in downtown',
        tags: ['nature'],
      },
    ],
    wide: false,
  },
  {
    type: 'singleton',
    image: {
      ...photoPaths.cmu,
      description: 'CMU on a snowy night',
      tags: ['night'],
    },
  },
  {
    type: 'multi',
    images: [
      {
        ...photoPaths.msg,
        description: 'Madison Square Garden and Empire State Building',
        tags: ['night'],
      },
      {
        ...photoPaths.convention,
        description: 'David L. Lawrence Convention Center',
        tags: ['skyline'],
      },
      {
        ...photoPaths.industry,
        description: 'Concrete mixer',
      },
      {
        ...photoPaths.river,
        description: 'PNC Park',
      },
    ],
    wide: true,
  },
  {
    type: 'singleton',
    image: {
      ...photoPaths.rivers,
      description: 'Skyline from North Shore park',
      tags: ['skyline'],
    },
  },
  {
    type: 'multi',
    images: [
      {
        ...photoPaths.subway,
        description: 'A subway car approaches...',
      },
      {
        ...photoPaths.tracks,
        description: 'Railway tracks from above',
      },
      {
        ...photoPaths.hills,
        description: 'Coopers Rock, West Virginia',
        tags: ['nature'],
      },
      {
        ...photoPaths.nyc,
        description: 'Radio City Music Hall',
        tags: ['night'],
      },
    ],
    wide: false,
  },
  {
    type: 'multi',
    images: [
      {
        ...photoPaths.street,
        description: 'Streetlights in the rain',
        tags: ['night'],
      },

      {
        ...photoPaths.brick,
        description: 'Wilting flower in the sunlight',
        tags: ['nature'],
      },
      {
        ...photoPaths.houses,
        description: 'Row of island houses',
      },
      {
        ...photoPaths.lot,
        description: 'Ominous parking lot',
        tags: ['night'],
      },
    ],
    wide: false,
  },
  {
    type: 'singleton',
    image: {
      ...photoPaths.sunset,
      description: 'Sunset in Erie, PA',
    },
  },
  {
    type: 'multi',
    images: [
      {
        ...photoPaths.pathway,
        description: 'Dark pathway to the river',
      },
      {
        ...photoPaths.mural,
        description: 'Faded mural in the Strip District',
      },
      {
        ...photoPaths.butterfly,
        description: 'Butterfly in the wilderness',
        tags: ['nature'],
      },
      {
        ...photoPaths.village,
        description: 'A secluded neighborhood from the woods',
      },
    ],
    wide: true,
  },
];
