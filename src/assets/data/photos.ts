import { ImageView } from '../../gallery';

const titles = [
  'allegheny',
  'arch',
  'brick',
  'bridge',
  'bridge2',
  'butterfly',
  'cathy',
  'clock',
  'cmu',
  'convention',
  'dusk',
  'electric',
  'empty',
  'flower',
  'grafitti',
  'hills',
  'hotel',
  'houses',
  'houses2',
  'incline',
  'industry',
  'lake',
  'lot',
  'metal',
  'msg',
  'mural',
  'mural2',
  'nyc',
  'pathway',
  'petal',
  'phipps',
  'puddle',
  'river',
  'rivers',
  'street',
  'street2',
  'subway',
  'sunset',
  'tracks',
  'village',
  'wires',
];
export const photoPaths = Object.fromEntries(
  titles.map((title) => [
    title,
    {
      title,
      original: process.env.PUBLIC_URL + '/gallery/' + title + '.jpeg',
      thumbnail: process.env.PUBLIC_URL + '/gallery/' + title + '_thumb.jpeg',
    },
  ])
);

export const gallery: Array<ImageView> = [
  {
    image: {
      ...photoPaths.allegheny,
      description: 'Allegheny Landing park',
    },
  },
  {
    image: {
      ...photoPaths.cathy,
      description: 'Cathedral of Learning',
      tags: ['night'],
    },
  },
  {
    image: {
      ...photoPaths.dusk,
      description: 'Skyline at dusk',
      tags: ['skyline'],
    },
  },
  {
    image: {
      ...photoPaths.flower,
      description: 'A tulip in downtown',
      tags: ['nature'],
    },
  },
  {
    image: {
      ...photoPaths.cmu,
      description: 'CMU on a snowy night',
      tags: ['night'],
    },
    wide: true,
  },
  {
    image: {
      ...photoPaths.msg,
      description: 'Madison Square Garden and Empire State Building',
      tags: ['night'],
    },
  },
  {
    image: {
      ...photoPaths.convention,
      description: 'David L. Lawrence Convention Center',
      tags: ['skyline'],
    },
  },
  {
    image: {
      ...photoPaths.industry,
      description: 'Concrete mixer',
    },
  },
  {
    image: {
      ...photoPaths.river,
      description: 'PNC Park',
    },
  },
  {
    image: {
      ...photoPaths.rivers,
      description: 'Skyline from North Shore park',
      tags: ['skyline'],
    },
    wide: true,
  },
  {
    image: {
      ...photoPaths.subway,
      description: 'A subway car approaches...',
    },
  },
  {
    image: {
      ...photoPaths.tracks,
      description: 'Railway tracks from above',
    },
  },
  {
    image: {
      ...photoPaths.hills,
      description: 'Coopers Rock, West Virginia',
      tags: ['nature'],
    },
  },
  {
    image: {
      ...photoPaths.nyc,
      description: 'Radio City Music Hall',
      tags: ['night'],
    },
  },
  {
    image: {
      ...photoPaths.street,
      description: 'Streetlights in the rain',
      tags: ['night'],
    },
  },
  {
    image: {
      ...photoPaths.brick,
      description: 'Wilting flower in the sunlight',
      tags: ['nature'],
    },
  },
  {
    image: {
      ...photoPaths.houses,
      description: 'Row of island houses',
    },
  },
  {
    image: {
      ...photoPaths.lot,
      description: 'Ominous parking lot',
      tags: ['night'],
    },
  },
  {
    image: {
      ...photoPaths.sunset,
      description: 'Sunset in Erie, PA',
    },
    wide: true,
  },
  {
    image: {
      ...photoPaths.pathway,
      description: 'Dark pathway to the river',
    },
  },
  {
    image: {
      ...photoPaths.mural,
      description: 'Faded mural in the Strip District',
    },
  },
  {
    image: {
      ...photoPaths.butterfly,
      description: 'Butterfly in the wilderness',
      tags: ['nature'],
    },
  },
  {
    image: {
      ...photoPaths.village,
      description: 'A pastel neighborhood from the woods',
    },
  },
  {
    image: {
      ...photoPaths.puddle,
      description: 'Puddle on the Ohio',
      tags: ['nature'],
    },
    wide: true,
  },
  {
    image: {
      ...photoPaths.arch,
      description: 'Tunnel to nowhere',
    },
  },
  {
    image: {
      ...photoPaths.empty,
      description: 'Empty roads at rush hour',
    },
  },
  {
    image: {
      ...photoPaths.phipps,
      description: 'Phipps Conservatory 🌈',
      tags: ['night'],
    },
  },
  {
    image: {
      ...photoPaths.wires,
      description: 'Towering telephone wires',
    },
  },
  {
    image: {
      ...photoPaths.metal,
      description: 'Hot Metal Bridge',
    },
  },
  {
    image: {
      ...photoPaths.mural2,
      description: 'Vibrant mural in Downtown PGH',
    },
  },
  {
    image: {
      ...photoPaths.petal,
      description: 'Red petal in a dull scene',
      tags: ['nature'],
    },
  },
  {
    image: {
      ...photoPaths.grafitti,
      description: 'The Color Park',
    },
  },
  {
    image: {
      ...photoPaths.clock,
      description: "An angry sky reflected on a clock's face",
    },
    wide: true,
  },
  {
    image: {
      ...photoPaths.incline,
      description: 'Duquesne Incline',
    },
  },
  {
    image: {
      ...photoPaths.houses2,
      description: 'Houses nestled under a bridge',
    },
  },
  {
    image: {
      ...photoPaths.lake,
      description: 'Panther Hollow Lake under a sheet of ice',
    },
  },
  {
    image: {
      ...photoPaths.hotel,
      description: 'Wyndham Grand hotel',
    },
  },
  {
    image: {
      ...photoPaths.electric,
      description: 'Power tower',
    },
  },
  {
    image: {
      ...photoPaths.street2,
      description: 'Tree tunnel',
    },
  },
  {
    image: {
      ...photoPaths.bridge2,
      description: 'An empty bridge',
    },
  },
  {
    image: {
      ...photoPaths.bridge,
      description: "Bridge to Washington's Landing",
    },
  },
];
