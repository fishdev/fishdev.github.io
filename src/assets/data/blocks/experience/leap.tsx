import React from 'react';

import { Block } from '../../../../interfaces';

export const leap: Block = {
  id: 'leap',
  name: 'Teaching Assistant',
  extra: <a href="https://www.cs.cmu.edu/~leap/">Leap@CMU</a>,
  range: {
    start: {
      month: 6,
      year: 2015,
    },
    end: {
      month: 8,
      year: 2016,
    },
  },
  description: <p>Taught local high school students computer science in 7-week summer program.</p>,
};
