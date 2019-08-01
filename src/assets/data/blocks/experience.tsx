import React from 'react';

import { Block } from '../../../interfaces';

export const experience: Block[] = [
  {
    id: 'broadcom',
    name: 'Software Engineering Intern',
    extra: 'Broadcom Corporation',
    range: {
      start: {
        month: 5,
        year: 2019,
      },
      end: {
        month: 8,
        year: 2019,
      },
    },
    description: (
      <p>
        Contributed to Angular frontend, Kotlin + Spring backend, and Node.js scalable testing
        harness for the Mainframe Team Center as part of an agile team.
      </p>
    ),
  },
  {
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
    description: (
      <p>Taught local high school students computer science in 7-week summer program.</p>
    ),
  },
  {
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
        Designed and developed{' '}
        <a href="https://github.com/fishdev/PrivacyTracker">PrivacyTracker</a>, a privacy plugin to
        increase user awareness of online tracking.
      </p>
    ),
    awards: [
      '1st place at PA Junior Academy of Science',
      '3rd place in math/CS at Pittsburgh Regional Science Fair',
    ],
  },
];
