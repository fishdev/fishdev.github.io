import React from 'react';

import { Block } from '../../../../interfaces';

export const scottylabs: Block = {
  id: 'scottylabs',
  name: 'ScottyLabs',
  range: {
    start: {
      month: 9,
      year: 2018,
    },
    end: 'Present',
  },
  buttons: [
    {
      url: 'https://scottylabs.org/wdw',
      icon: 'fas fa-dog',
      name: 'ScottyLabs Web Dev Weekend',
    },
  ],
  description: (
    <p>
      Gave introductory React talk at <a href="https://scottylabs.org/wdw/">Web Dev Weekend</a>{' '}
      2018. Overhauled Python + Flask API to make printing accessible on-campus.
    </p>
  ),
};
