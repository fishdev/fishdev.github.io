import React from 'react';

export const diderot = {
  id: 'diderot',
  name: 'Research Assistant',
  extra: 'Carnegie Mellon University',
  range: {
    start: {
      month: 9,
      year: 2019,
    },
    end: {
      month: 4,
      year: 2020,
    },
  },
  description: (
    <p>
      Worked on learning management system at CMU to make educational content interactive and
      accessible. Developed analytics component with Python + Django.
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
        As a research assistant, I developed an analytics component that gives instructors insight
        into student engagement with the platform as well as participation in online discussions. I
        created data visualizations that help instructors understand how to better connect with
        students. The software was written in Python using{' '}
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
  resume: {
    ord: 1,
    extra: 'Diderot',
    description: (
      <span>
        Worked on <u>learning management</u> system at CMU to make education social and interactive.
        Developed analytics component with <i>Python</i> + <i>Django</i>.
      </span>
    ),
  },
};
