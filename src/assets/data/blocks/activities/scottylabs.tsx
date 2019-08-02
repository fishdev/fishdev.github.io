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
      url: 'https://scottylabs.org/',
      icon: 'fas fa-dog',
      name: 'ScottyLabs',
    },
    {
      url: 'https://scottylabs.org/wdw/react/sunday/slides.pdf',
      icon: 'fas fa-square',
      name: 'Web Dev Weekend Presentation',
    },
  ],
  description: (
    <p>
      Gave introductory React talk at <a href="https://scottylabs.org/wdw/">Web Dev Weekend</a>{' '}
      2018. Overhauled Python + Flask API to make printing accessible on-campus.
    </p>
  ),
  info: (
    <div>
      <p>
        I am a member of ScottyLabs, an organization at Carnegie Mellon devoted to helping students
        learn about technology.
      </p>
      <p>
        Using Python and <a href="https://flask.palletsprojects.com/en/1.1.x/">Flask</a>, I
        overhauled an API that allows students to easily create print jobs from a web browser or
        mobile device.
      </p>
      <p>
        At <a href="https://scottylabs.org/wdw">Web Dev Weekend 2018</a>, I gave a talk on
        application development using React. This included a brief lecture and a hands-on activity
        where I guided several students through their first React project.
      </p>
    </div>
  ),
};