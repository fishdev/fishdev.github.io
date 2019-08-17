import { Dropdown } from '../../interfaces';

export const more: Dropdown[] = [
  {
    url: '/about',
    icon: 'fas fa-user',
    name: 'About me',
    internal: true,
  },
  {
    url: '/favorites',
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
