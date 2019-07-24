import React from 'react';

import { Block } from '../../../interfaces';

export const projects: Block[] = [
  {
    id: 'assure',
    name: 'Assure',
    tagline: 'Connecting needs',
    start: 'February 2019',
    event: {
      name: 'TartanHacks',
      url: 'https://tartanhacks.com',
    },
    github: 'https://github.com/fishdev/Asssure',
    url: 'https://devpost.com/software/assure-hep75l',
    description: (
      <p>
        Implemented Node.js + MongoDB + React service to make local donations more accessible and
        secure.
      </p>
    ),
  },
  {
    id: 'cmulab',
    name: 'CMULab',
    tagline: 'Secure check-in and scoring',
    start: 'January 2019',
    end: 'Present',
    github: 'https://github.com/QuantumStack/CMULab',
    url: 'https://cmulab.quantumstack.xyz',
    description: (
      <p>
        Developing Node.js + MongoDB web service for teachers to score class activities. Adopted by{' '}
        <a href="https://www.cs.cmu.edu/~15122/">15-122</a> at CMU.
      </p>
    ),
  },
  {
    id: 'flow',
    name: 'Flow',
    tagline: 'Real-time water consumption tracker',
    start: 'September 2018',
    event: {
      name: 'HackCMU',
      url: 'https://hackcmu.org',
    },
    github: 'https://github.com/fishdev/Flow',
    description: (
      <p>
        Created Node.js + Redis backend to limit and predict water usage with machine learning
        algorithm.
      </p>
    ),
    awards: ['2nd place for Riot Games sponsor prize'],
  },
  {
    id: 'pgss',
    name: 'Machine Learning Analysis of Judicial Records',
    start: 'July',
    end: 'August 2017',
    event: {
      name: "PA Governor's School",
      url: 'http://sciences.pa-gov-schools.org',
    },
    description: (
      <p>
        Used <a href="https://scikit-learn.org">SciKit-Learn</a> library and Python web scraper to
        collect 12 million case records and extract patterns. Created decision tree and clustering
        algorithm to predict future case outcomes with 81.4% test accuracy.
      </p>
    ),
  },
  {
    id: 'awesomebot',
    name: 'AwesomeBot',
    start: 'October 2015',
    end: 'January 2017',
    github: 'https://github.com/fishdev/AwesomeBot',
    description: (
      <p>
        Built multi-purpose Node.js bot for managing and entertaining over 10,000 online
        communities.
      </p>
    ),
  },
  {
    id: 'imgcap',
    name: 'ImgCap: Automated image captioning',
    start: 'September 2015',
    end: 'March 2016',
    description: (
      <p>
        A computer vision system to generate image captions on-the-fly to aid blind users. Written
        in Java + <a href="https://opencv.org">OpenCV</a> library.
      </p>
    ),
    awards: [
      <span>
        1st place at <a href="http://www.pjas.net">PA Junior Academy of Science</a>
      </span>,
      <span>
        2nd place in math/CS at{' '}
        <a href="http://www.carnegiesciencecenter.org/stemcenter/stemcenter-science-fair/">
          Pittsburgh Regional Science Fair
        </a>
      </span>,
    ],
  },
];
