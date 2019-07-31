import React from 'react';

import { Block } from '../../../interfaces';

export const activities: Block[] = [
  {
    id: 'tca',
    name: 'Google Tech Challenge',
    range: {
      start: {
        month: 4,
        year: 2019,
      },
    },
    buttons: [
      {
        url: 'https://buildyourfuture.withgoogle.com/events/tech-challenge/',
        icon: 'fas fa-gamepad',
        name: 'Competition information',
      },
    ],
    description: (
      <p>
        Competed against teams of students from local universities. Timed coding challenge,
        programming and logic puzzles, and word association.
      </p>
    ),
    awards: ['1st place team overall'],
  },
  {
    id: 'endtherain',
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
  },
  {
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
  },
  {
    id: 'scotty',
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
  },
];
