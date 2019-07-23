import React from 'react';

import { Block } from '../../../interfaces';

export const experience: Block[] = [
  {
    id: 'broadcom',
    name: 'Software Engineering Intern',
    extra: 'Broadcom Corporation',
    start: 'May 2019',
    end: 'Present',
    description: (
      <p>
        Contributing to Angular frontend and scalable server testing harness for{' '}
        <a href="https://www.ca.com/us/products/ca-netmaster-network-management-tcpip.html">
          NetMaster
        </a>
        .
      </p>
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
    start: 'June 2014',
    end: 'June 2015',
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
