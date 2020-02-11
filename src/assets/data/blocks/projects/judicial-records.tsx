import React from 'react';

import { Block } from '../../../../interfaces';

export const judicial_records: Block = {
  id: 'judicial-records',
  name: 'Case Case Study',
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
  info: (
    <div>
      <p>
        While court records are publicly available, they are usually obfuscated behind dated
        websites. Under the mentorship of <a href="http://www.cs.cmu.edu/~pavlo/">Dr. Andy Pavlo</a>{' '}
        at the Pennsylvania Governor's School for the Sciences, I developed a Python web scraper to
        extract data from the Maryland judiciary website and applied the{' '}
        <a href="https://scikit-learn.org">SciKit-Learn</a> library to exrapolate new, meaningful
        information that can be used to inform public policy.
      </p>
    </div>
  ),
  moreButtons: [
    {
      icon: 'fas fa-file-alt',
      name: 'Research Presentation',
      url: process.env.PUBLIC_URL + '/judicial-records.pptx',
    },
  ],
};
