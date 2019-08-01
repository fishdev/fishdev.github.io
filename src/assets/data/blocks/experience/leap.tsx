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
  url: 'https://www.cs.cmu.edu/~leap/',
  description: <p>Taught local high school students computer science in 7-week summer program.</p>,
  info: (
    <div>
      <p>
        Leap@CMU (formerly Andrew's Leap) was a 7-week summer program run by Carnegie Mellon's
        School of Computer Science for local high school students. As a teaching assistant for 2
        summers, my responsibilities included:
      </p>
      <ul>
        <li>Taught groups of about 20 students the fundamentals of object-oriented programming.</li>
        <li>
          Developed a series of lectures and hands-on activities introducing students to Java.
        </li>
        <li>
          Led 2-3 teaching assistants and mentored students in completing individual projects.
        </li>
        <li>Assisted with planning social events throughout the program.</li>
      </ul>
    </div>
  ),
};
