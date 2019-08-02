import React from 'react';

import { Block } from '../../../../interfaces';

export const end_the_rain: Block = {
  id: 'end-the-rain',
  name: 'Plaid Umbrella Project',
  extra: 'Technical & Software Lead',
  range: {
    start: {
      month: 9,
      year: 2018,
    },
    end: 'Present',
  },
  buttons: [
    {
      url: 'https://endtherain.com',
      icon: 'fas fa-umbrella',
      name: 'End the Rain website',
    },
  ],
  description: (
    <p>
      Technical and software lead. Coordinating with electrical and mechanical teams to build
      umbrella dispenser network, as well as Node.js + MongoDB backend system.
    </p>
  ),
};
