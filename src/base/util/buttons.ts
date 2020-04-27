import { Button } from '../interfaces';

export const makeButtonsList = (
  buttons: Button[] = [],
  github?: string,
  url?: string
): Button[] => {
  const extraButtons: Button[] = [];
  if (github)
    extraButtons.push({
      url: 'https://github.com/' + github,
      icon: 'fab fa-github',
      name: 'GitHub',
    });
  if (url) extraButtons.push({ url, icon: 'fas fa-globe', name: 'Website' });
  return buttons.concat(extraButtons);
};
