import { Data } from '../../Data';
import portrait from '../ashwin.jpg';
import { social } from './social';
import { about } from './about';
import { volunteering } from './volunteering';
import { universities, schools, coursework } from './education';
import { languages, technologies } from './skills';
import { playlists, podcasts, codes } from './favorites';
import { photoPaths, gallery } from './photos';
import { projects, experience, activities } from './blocks';

const NAMES = ['Ashwin', 'Srinivasan'];
const HOSTING_DOMAIN = 'fishdev.xyz';

export default {
  constants: {
    names: NAMES,
    fullName: NAMES.join(' '),
    organization: universities.cmu.name,
    role: 'Student and developer',
    portraitUrl: portrait,
    location: 'Pittsburgh, PA',
    locationUrl: 'https://www.visitpittsburgh.com',
    hostingDomain: HOSTING_DOMAIN,
    hostingUrl: 'https://' + HOSTING_DOMAIN,
    metaImageUrl: 'https://github.com/fishdev/fishdev.github.io/blob/master/as.png?raw=true',
    websiteSrc: 'https://github.com/fishdev/fishdev.github.io',
    email: 'ashwins@andrew.cmu.edu',
  },
  links: {
    social,
    spotifyId: 'g5ojwey9iyo08skvmjnx3dih3',
  },
  about,
  resume: {
    volunteering,
    education: {
      universities,
      currentUniversity: 'cmu',
      schools,
      coursework,
    },
    blocks: [
      {
        name: 'projects',
        data: projects,
      },
      {
        name: 'experience',
        data: experience,
      },
      {
        name: 'activities',
        data: activities,
      },
    ],
    skills: [
      {
        name: 'languages',
        data: languages,
      },
      {
        name: 'technologies',
        data: technologies,
      },
    ],
  },
  favorites: {
    playlists,
    podcasts,
    content: {
      code: codes,
    },
  },
  photos: {
    paths: photoPaths,
    gallery,
  },
} as Data;
