import React from 'react';

import { Block } from '../../../../interfaces';

export const tartan: Block = {
  id: 'tartan',
  name: 'The Tartan',
  extra: 'Science & Technology Editor',
  range: {
    start: {
      month: 9,
      year: 2018,
    },
    end: 'Present',
  },
  buttons: [
    {
      url: 'https://thetartan.org',
      icon: 'fas fa-newspaper',
      name: 'Newspaper online edition',
    },
  ],
  description: <p>Writing and editing articles, designing weekly paper layout.</p>,
};
