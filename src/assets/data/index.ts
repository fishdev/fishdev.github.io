import portrait from '../ashwin.jpg';
import { social } from './social';
import { about } from './about';
import { more } from './more';
import { volunteering } from './volunteering';
import { universities, schools } from './education';
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
    organization: 'Stripe',
    role: 'Software Engineer',
    portraitUrl: portrait,
    location: 'New York City',
    locationUrl: 'https://www.visitpittsburgh.com',
    hostingDomain: HOSTING_DOMAIN,
    hostingUrl: 'https://' + HOSTING_DOMAIN,
    metaImageUrl: 'https://github.com/fishdev/fishdev.github.io/blob/master/as.png?raw=true',
    websiteSrc: 'https://github.com/fishdev/fishdev.github.io',
    email: 'ashwins@andrew.cmu.edu',
  },
  links: {
    social,
    musicId: 'ashwins5',
    more,
  },
  about,
  resume: {
    volunteering,
    education: {
      universities,
      focusedUniversity: 'cmu',
      schools,
    },
    blocks: [
      {
        name: 'projects',
        data: projects,
        ord: 2,
      },
      {
        name: 'experience',
        data: experience,
        ord: 1,
      },
      {
        name: 'activities',
        data: activities,
        ord: 3,
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
    music: playlists,
    podcasts,
    content: {
      code: codes,
    },
  },
  gallery,
};
