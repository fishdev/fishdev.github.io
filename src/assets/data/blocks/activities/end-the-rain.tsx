import React from 'react';

import { Block } from '../../../../interfaces';

export const end_the_rain: Block = {
  id: 'end-the-rain',
  name: 'Plaid Umbrella Project',
  extra: 'Technical & Software Lead',
  range: {
    start: {
      month: 9,
      year: 2018,
    },
    end: 'Present',
  },
  buttons: [
    {
      url: 'https://endtherain.com',
      icon: 'fas fa-umbrella',
      name: 'End the Rain website',
    },
  ],
  description: (
    <p>
      Technical and software lead. Coordinating with electrical and mechanical teams to build
      umbrella dispenser network, as well as Node.js + MongoDB backend system.
    </p>
  ),
  info: (
    <div>
      <p>
        I was one of the first members of End the Rain, an organization dedicated to mitigating
        effects of weather at Carnegie Mellon. The Plaid Umbrella Project will install a system of
        free umbrella dispensers around campus.
      </p>
      <p>
        As the technical and software lead, I created and maintain the organization's website. In
        addition, I am developing a Node.js + MongoDB backend system for the umbrella dispenser
        network, as well as a mobile application to improve accessibility. I coordinate electrial
        and mechanical engineering teams to perform integration tests on the umbrella dispenser
        prototypes.
      </p>
      <p>I also help make decisions about the organization and recruit new members.</p>
    </div>
  ),
  images: [
    {
      original: process.env.PUBLIC_URL + '/end-the-rain.png',
      thumbnail: process.env.PUBLIC_URL + '/end-the-rain.png',
      description: 'Planned umbrella dispenser locations',
    },
  ],
};
