import React from 'react';

import { Block } from '../../../../resume';

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
  info: (
    <div>
      <p>
        Digital images cannot be properly viewed by vision-impaired users or those with very slow
        Internet connections. Only about 25 percent of images on the web are adequately transcribed
        into text.
      </p>
      <p>
        ImgCap combines edge detection and object recognition from{' '}
        <a href="https://opencv.org">OpenCV</a> and{' '}
        <a href="https://aylien.com/text-api/image-tagging/">Aylien's Image Tagging API</a> to
        caption images on-the-fly. Its output can be fed into text-to-speech software to drastically
        improve the user experience for the blind and people in developing nations.
      </p>
    </div>
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
  moreButtons: [
    {
      icon: 'fas fa-file-alt',
      name: 'Research Paper',
      url: process.env.PUBLIC_URL + '/imgcap.pdf',
    },
  ],
  images: [
    {
      original: process.env.PUBLIC_URL + '/imgcap-1.png',
      thumbnail: process.env.PUBLIC_URL + '/imgcap-1.png',
    },
    {
      original: process.env.PUBLIC_URL + '/imgcap-2.png',
      thumbnail: process.env.PUBLIC_URL + '/imgcap-2.png',
    },
  ],
  resume: {
    ord: 5,
    description: (
      <span>
        On-the-fly computer vision system for blind users. Written in <i>Java</i> + <i>OpenCV</i>.
      </span>
    ),
    award: '1st place, PA Junior Academy of Science | 2nd place, Pittsburgh Science Fair',
  },
};
