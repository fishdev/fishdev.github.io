import React from 'react';

export const assure = {
  id: 'assure',
  name: 'Assure',
  tagline: 'Connecting needs',
  range: {
    start: {
      month: 2,
      year: 2019,
    },
  },
  event: {
    name: 'TartanHacks',
    url: 'https://tartanhacks.com',
  },
  url: 'https://devpost.com/software/assure-hep75l',
  description: (
    <p>
      Implemented Node.js + MongoDB + React service to make local donations more accessible and
      secure.
    </p>
  ),
  info: (
    <div>
      <p>
        People are often willing to donate goods, but existing channels require too much effort or
        could be unsafe. This was the motivation behind Assure, a hackathon project that allows
        donors to list their items in a digital registry. Those in need can simply select listings
        they like and securely communicate with the donor to arrange a pickup.
      </p>
      <p>
        Over nearly 24 hours, my 4-person team developed the application using Node.js, Express, and
        MongoDB for the backend and React for responsive frontend. I contributed as follows:
      </p>
      <ul>
        <li>Designed database models</li>
        <li>Protyped and implemented entire user interface</li>
        <li>
          Wrote realtime chat section of Assure using the <a href="https://socket.io/">Socket.IO</a>{' '}
          library
        </li>
        <li>Coordinated with backend development to rigorously test the application</li>
        <li>Assisted with setup, hosting, and presentation</li>
      </ul>
    </div>
  ),
  images: [
    {
      original:
        'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/757/877/datas/gallery.jpg',
      thumbnail:
        'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/757/877/datas/gallery.jpg',
      description: 'A sample item listing',
    },
    {
      original:
        'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/757/878/datas/gallery.jpg',
      thumbnail:
        'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/757/878/datas/gallery.jpg',
      description: 'Secure chat view',
    },
  ],
  unimportant: true,
};
