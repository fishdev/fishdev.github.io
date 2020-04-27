import React from 'react';

import { Course, Semester } from '../../resume';

export const universityMajors: string = 'BS in Computer Science';

export const universityMinors: string[] = ['human-computer interaction', 'software engineering'];

export const universityGrad: string = 'May 2022';

export const universityQPA: number = 3.59;

export const university: React.ReactNode = (
  <span>
    Studying computer science at{' '}
    <a href="https://cs.cmu.edu">
      <strong>Carnegie Mellon</strong>
    </a>{' '}
    with a minor in {universityMinors[0]}. My cumulative QPA is{' '}
    <strong className="gradientbg">{universityQPA}</strong>. Expected graduation in {universityGrad}
    .
  </span>
);

export const currentSemester: Semester = 'Spring 2020';

export const coursework: Course[] = [
  {
    id: '15-213',
    name: 'Introduction to Computer Systems',
    semester: 'Spring 2020',
    url: 'https://www.coursicle.com/cmu/courses/CS/15213/',
  },
  {
    id: '10-315',
    name: 'Introduction to Machine Learning',
    semester: 'Spring 2020',
    url: 'https://www.coursicle.com/cmu/courses/MLG/10315/',
  },
  {
    id: '15-210',
    name: 'Parallel and Sequential Data Structures and Algorithms',
    semester: 'Fall 2019',
    url: 'https://www.coursicle.com/cmu/courses/CS/15210/',
  },
  {
    id: '17-214',
    name: 'Principles of Software Construction',
    semester: 'Fall 2019',
    url: 'https://www.coursicle.com/cmu/courses/SE/17214/',
  },
  {
    id: '15-251',
    name: 'Great Ideas in Theoretical Computer Science',
    semester: 'Spring 2019',
    url: 'https://www.coursicle.com/cmu/courses/CS/15251/',
  },
  {
    id: '19-101',
    name: 'Introduction to Engineering and Public Policy',
    semester: 'Spring 2019',
    url: 'https://www.coursicle.com/cmu/courses/EPP/19101/',
  },
  {
    id: '15-150',
    name: 'Functional Programming',
    semester: 'Spring 2019',
    ta: ['Spring 2020'],
    url: 'https://www.coursicle.com/cmu/courses/CS/15150/',
  },
  {
    id: '15-151',
    name: 'Math Foundations of Computer Science',
    semester: 'Fall 2018',
    url: 'https://www.coursicle.com/cmu/courses/CS/15151/',
  },
  {
    id: '15-122',
    name: 'Principles of Imperative Computation',
    semester: 'Fall 2018',
    ta: ['Fall 2019'],
    url: 'https://www.coursicle.com/cmu/courses/CS/15122/',
  },
  {
    id: '21-241',
    name: 'Matrices and Linear Transformations',
    semester: 'Fall 2018',
    url: 'https://www.coursicle.com/cmu/courses/MSC/21241/',
  },
];

export const hs: string = 'Taylor Allderdice High School';

export const hsGrad: string = 'May 2018';

export const hsGPA: number = 4;

export const gradeschool: React.ReactNode = (
  <span>
    I attended <a href="https://discoverpps.org/allderdice">{hs}</a>. Graduated in {hsGrad}
    with a GPA of {hsGPA}.
  </span>
);
