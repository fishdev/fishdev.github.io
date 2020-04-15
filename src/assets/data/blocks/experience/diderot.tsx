import React from 'react';

import { Block } from '../../../../resume';

export const diderot: Block = {
  id: 'diderot',
  name: 'Research Assistant',
  extra: 'Carnegie Mellon University',
  range: {
    start: {
      month: 9,
      year: 2019,
    },
    end: 'Present',
  },
  description: (
    <p>
      Working on learning management system at CMU to make educational content interactive and
      accessible. Developing analytics component with Python + Django.
    </p>
  ),
  info: (
    <div>
      <p>
        Diderot is a platform that delivers interactive educational content to students. It also
        fosters discussions to aid learning and provides tools to transform traditional plain-text
        materials into accessible online books. The service is already used by over 1500 students at
        Carnegie Mellon University.
      </p>
      <p>
        As a research assistant, I am developing an analytics component that gives instructors
        insight into student engagement with the platform as well as participation in online
        discussions. I am creating data visualizations that help instructors understand how to
        better connect with students. The software is written in Python using{' '}
        <a href="https://www.djangoproject.com">Django</a> with{' '}
        <a href="https://jquery.com">jQuery</a> on the frontend.
      </p>
    </div>
  ),
  moreButtons: [
    {
      icon: 'fas fa-chalkboard',
      name: 'Diderot',
      url: 'https://diderot.one',
    },
  ],
};
