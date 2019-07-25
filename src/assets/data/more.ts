import { Dropdown } from '../../interfaces';

export const more: Dropdown[] = [
  {
    url: process.env.PUBLIC_URL + '/resume.pdf',
    icon: 'fas fa-file-download',
    name: 'Resume PDF',
  },
  {
    url: '/spotify',
    icon: 'fab fa-spotify',
    name: 'Spotify playlists',
    internal: true,
  },
  {
    url: 'https://quantumstack.xyz',
    icon: 'fas fa-cubes',
    name: 'QuantumStack',
    description: 'My collaborative projects',
  },
];
