import React from 'react';

import { Block } from '../../../../interfaces';

export const cups: Block = {
  id: 'cups',
  name: 'Research Intern',
  extra: (
    <span>
      <a href="http://cups.cs.cmu.edu">CUPS Lab</a>, Carnegie Mellon University
    </span>
  ),
  range: {
    start: {
      month: 6,
      year: 2014,
    },
    end: {
      month: 6,
      year: 2015,
    },
  },
  description: (
    <p>
      Designed and developed <a href="https://github.com/fishdev/PrivacyTracker">PrivacyTracker</a>,
      a privacy plugin to increase user awareness of online tracking.
    </p>
  ),
  awards: [
    '1st place at PA Junior Academy of Science',
    '3rd place in math/CS at Pittsburgh Regional Science Fair',
  ],
};
