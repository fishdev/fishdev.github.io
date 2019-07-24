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
    semester: 'Fall 2019',
    current: true,
    url: 'https://www.coursicle.com/cmu/courses/CS/15210/',
    description: 'hello',
  },
  {
    number: '17-214',
    name: 'Principles of Software Construction',
    semester: 'Fall 2019',
    current: true,
    url: 'https://www.coursicle.com/cmu/courses/SE/17214/',
  },
  {
    number: '15-251',
    name: 'Great Ideas in Theoretical Computer Science',
    semester: 'Spring 2019',
    url: 'https://www.coursicle.com/cmu/courses/CS/15251/',
  },
  {
    number: '15-150',
    name: 'Functional Programming',
    semester: 'Spring 2019',
    url: 'https://www.coursicle.com/cmu/courses/CS/15150/',
  },
  {
    number: '19-101',
    name: 'Introduction to Engineering and Public Policy',
    semester: 'Spring 2019',
    url: 'https://www.coursicle.com/cmu/courses/EPP/19101/',
  },
  {
    number: '15-151',
    name: 'Math Foundations of Computer Science',
    semester: 'Fall 2018',
    url: 'https://www.coursicle.com/cmu/courses/CS/15151/',
  },
  {
    number: '15-122',
    name: 'Principles of Imperative Computation',
    semester: 'Fall 2018',
    url: 'https://www.coursicle.com/cmu/courses/CS/15122/',
  },
  {
    number: '21-241',
    name: 'Matrices and Linear Transformations',
    semester: 'Fall 2018',
    url: 'https://www.coursicle.com/cmu/courses/MSC/21241/',
  },
];

export const gradeschool: React.ReactNode = (
  <p>
    I attended <a href="https://discoverpps.org/allderdice">Taylor Allderdice High School</a>.
    Graduated in May 2018 with a GPA of 4.0.
  </p>
);
