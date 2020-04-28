import React from 'react';

export const flow = {
  id: 'flow',
  name: 'Flow',
  tagline: 'Real-time water consumption tracker',
  range: {
    start: {
      month: 9,
      year: 2018,
    },
  },
  event: {
    name: 'HackCMU',
    url: 'https://hackcmu.org',
  },
  github: 'fishdev/Flow',
  url: 'https://devpost.com/software/flow-m4r5gw',
  description: (
    <p>
      Created Node.js + Redis backend to limit and predict water usage with machine learning
      algorithm.
    </p>
  ),
  info: (
    <div>
      <p>
        Water is an increasingly scarce resource. Flow is a hackathon project that tracks water
        consumption in your household, alerts you when it detects a leak, and provides intelligent
        usage predictions.
      </p>
      <p>
        The hardware component uses a turbine to measure water flow rate, and can be attached to a
        central water pipe. An onboard Arduino communicates measurements to the Flow server.
      </p>
      <p>
        Flow's software includes a server written with Node.js, Express, and Redis. The
        mobile-optimized web control panel shows usage alerts and predictions using a
        regression-based machine learning algorithm.
      </p>
      <p>As part of a 4-person team, I contributed as follows:</p>
      <ul>
        <li>Built entire software stack, coordinating with hardware development</li>
        <li>Designed user interface to present ML insights</li>
        <li>Performed integration tests on the system</li>
      </ul>
    </div>
  ),
  awards: ['2nd place for Riot Games sponsor prize'],
  unimportant: true,
  resume: {
    ord: 2,
    description: (
      <span>
        Created <i>Node.js</i> + <i>Redis</i> backend to <u>predict water usage</u> with ML
        algorithm.
      </span>
    ),
    award: '2nd place for Riot Games sponsor prize at HackCMU 2018',
  },
};
