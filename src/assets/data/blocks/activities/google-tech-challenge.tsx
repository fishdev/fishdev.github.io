import React from 'react';

import { Block } from '../../../../interfaces';

export const google_tech_challenge: Block = {
  id: 'google-tech-challenge',
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
  info: (
    <div>
      <p>
        Competed against dozens of students from in teams from other universities at Google
        Pittsburgh. The event included:
      </p>
      <ul>
        <li>Timed coding challenge</li>
        <li>Programming and logic puzzles</li>
        <li>Word association</li>
      </ul>
    </div>
  ),
  awards: ['1st place team overall'],
  unimportant: true,
};
