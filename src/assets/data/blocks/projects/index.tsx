import React from 'react';

import { Block } from '../../../../interfaces';

import { assure } from './assure';
import { cmulab } from './cmulab';
import { flow } from './flow';
import { awesomebot } from './awesomebot';

export const projects: Block[] = [
  assure,
  cmulab,
  flow,
  {
    id: 'pgss',
    name: 'Machine Learning Analysis of Judicial Records',
    range: {
      start: {
        month: 7,
        year: 2017,
      },
      end: {
        month: 8,
        year: 2017,
      },
    },
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
  awesomebot,
  {
    id: 'imgcap',
    name: 'ImgCap: Automated image captioning',
    range: {
      start: {
        month: 9,
        year: 2015,
      },
      end: {
        month: 3,
        year: 2016,
      },
    },
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
