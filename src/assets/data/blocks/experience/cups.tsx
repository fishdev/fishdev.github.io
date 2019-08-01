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
  info: (
    <div>
      <p>
        Worked under <a href="https://www.blaseur.com/">Dr. Blase Ur</a> and{' '}
        <a href="http://lorrie.cranor.org/">Dr. Lorrie Cranor</a> to research, design, and develop
        usable online privacy software.
      </p>
      <p>
        PrivacyTracker is a browser plugin that presents actionable information about online
        tracking, allowing users to understand what companies know about them and protect their
        privacy.
      </p>
      <p>
        I conducted a 50-person survey to inform the software design process, and presented my
        findings as well as implementation details of PrivacyTracker at regional science
        competitions.
      </p>
    </div>
  ),
  awards: [
    '1st place at PA Junior Academy of Science',
    '3rd place in math/CS at Pittsburgh Regional Science Fair',
  ],
  moreButtons: [
    {
      icon: 'fas fa-eye',
      name: 'PrivacyTracker',
      url: 'https://github.com/fishdev/PrivacyTracker',
    },
  ],
  images: [
    {
      original: 'https://fishdev.xyz/PrivacyTracker/img/portfolio/personal-overview.png',
      thumbnail: 'https://fishdev.xyz/PrivacyTracker/img/portfolio/personal-overview.png',
    },
    {
      original: 'https://fishdev.xyz/PrivacyTracker/img/portfolio/easy-interface.png',
      thumbnail: 'https://fishdev.xyz/PrivacyTracker/img/portfolio/easy-interface.png',
    },
    {
      original: 'https://fishdev.xyz/PrivacyTracker/img/portfolio/options-pane.png',
      thumbnail: 'https://fishdev.xyz/PrivacyTracker/img/portfolio/options-pane.png',
    },
  ],
};
