import React from 'react';

import { Block } from '../../../../interfaces';

export const judicial_records: Block = {
  id: 'judicial-records',
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
};
