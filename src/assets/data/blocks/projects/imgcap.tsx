import React from 'react';

import { Block } from '../../../../interfaces';

export const imgcap: Block = {
  id: 'imgcap',
  name: 'ImgCap',
  tagline: 'Automated image captioning',
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
      A computer vision system to generate image captions on-the-fly to aid blind users. Written in
      Java + <a href="https://opencv.org">OpenCV</a> library.
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
};
