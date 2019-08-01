import React from 'react';

import { Block } from '../../../../interfaces';

export const cmulab: Block = {
  id: 'cmulab',
  name: 'CMULab',
  tagline: 'Secure check-in and scoring',
  range: {
    start: {
      month: 1,
      year: 2019,
    },
    end: 'Present',
  },
  github: 'QuantumStack/CMULab',
  url: 'https://cmulab.quantumstack.xyz',
  description: (
    <p>
      Developing Node.js + MongoDB web service for teachers to score class activities. Adopted by{' '}
      <a href="https://www.cs.cmu.edu/~15122/">15-122</a> at CMU.
    </p>
  ),
  info: (
    <div>
      <p>
        In-class activities provide students with valuable hands-on experience. However, it is
        difficult for instructors to keep track of student performance in a lab environment.
        Additionally, university courses often struggle to organize students into designated
        sections for labs.
      </p>
      <p>
        CMULab is a tool to manage a course's labs and activities. Instructors can check-in and
        score students via a mobile device, simply by scanning a QR code that identifies each
        student. CMULab automatically flags students who are attending the wrong section or engaging
        in suspicious activity. The data can be viewed through an interactive web portal, then
        exported to multiple formats. Students receive emails about each lab, allowing them to track
        their progress.
      </p>
      <p>
        Carnegie Mellon's{' '}
        <a href="https://www.cs.cmu.edu/~15122/schedule.shtml">
          15-122: Principles of Imperative Computation
        </a>{' '}
        has adopted CMULab. The course staff have praised the system for its ease-of-use, allowing
        instructors to focus on enhancing students' learning.
      </p>
      <p>
        I wrote the backend using Node.js, Express, and MongoDB. I also designed the user interface,
        which uses React and <a href="https://bulma.io/">Bulma CSS</a>.
      </p>
    </div>
  ),
  images: [
    {
      original:
        'https://camo.githubusercontent.com/ac354b6598274e5fe4b3a2ff1dcab398540cf9cf/68747470733a2f2f692e696d6775722e636f6d2f43793064616e492e706e67',
      thumbnail:
        'https://camo.githubusercontent.com/ac354b6598274e5fe4b3a2ff1dcab398540cf9cf/68747470733a2f2f692e696d6775722e636f6d2f43793064616e492e706e67',
      description: 'Easy-to-use check-in screen for instructors',
    },
    {
      original:
        'https://camo.githubusercontent.com/78eafdee6350107925afff38c0bc5240aa3fd973/68747470733a2f2f692e696d6775722e636f6d2f3549494d4b35452e706e67',
      thumbnail:
        'https://camo.githubusercontent.com/78eafdee6350107925afff38c0bc5240aa3fd973/68747470733a2f2f692e696d6775722e636f6d2f3549494d4b35452e706e67',
      description: 'Detailed configuration options',
    },
  ],
};
