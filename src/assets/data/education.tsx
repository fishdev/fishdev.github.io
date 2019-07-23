import React from 'react';

import { Course } from '../../interfaces';

export const university: React.ReactNode = (
  <p>
    Studying computer science at{' '}
    <a href="https://cs.cmu.edu">
      <strong>Carnegie Mellon University</strong>
    </a>
    . My cumulative QPA is 3.5 with expected graduation in May 2022. Relevant coursework:
  </p>
);

export const coursework: Course[] = [
  {
    number: '15-210',
    name: 'Parallel and Sequential Data Structures and Algorithms',
    current: true,
  },
  {
    number: '15-251',
    name: 'Great Ideas in Theoretical Computer Science',
    current: false,
  },
  {
    number: '15-150',
    name: 'Functional Programming',
    current: false,
  },
  {
    number: '15-151',
    name: 'Math Foundations of Computer Science',
    current: false,
  },
  {
    number: '15-122',
    name: 'Principles of Imperative Computation',
    current: false,
  },
];

export const gradeschool: React.ReactNode = (
  <p>
    I attended <a href="https://discoverpps.org/allderdice">Taylor Allderdice High School</a>.
    Graduated in May 2018 with a GPA of 4.0.
  </p>
);
