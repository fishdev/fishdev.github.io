import React from 'react';

import { Block } from '../../../../resume';

export const broadcom: Block = {
  id: 'broadcom',
  name: 'Software Engineering Intern',
  extra: 'Broadcom Corporation',
  range: {
    start: {
      month: 5,
      year: 2019,
    },
    end: {
      month: 8,
      year: 2019,
    },
  },
  description: (
    <p>
      Contributed to Angular frontend, Kotlin + Spring backend, and Node.js scalable testing harness
      for the Mainframe Team Center as part of an agile team.
    </p>
  ),
  info: (
    <div>
      <p>
        I interned for 12 weeks at <a href="https://www.broadcom.com/">Broadcom's</a> Pittsburgh
        office (formerly <a href="https://www.ca.com/us.html">CA Technologies</a>). Part of an
        agile/scrum team for the NetMaster Mainframe Team Center. My responsiblities:
      </p>
      <ul>
        <li>
          Developed reusable <a href="https://angular.io">Angular</a> UI components based on
          specifications from UX team, including data visualizations, virtualized table for large
          datasets, and sort/filter tools.
        </li>
        <li>
          Contributed to <a href="https://kotlinlang.org/">Kotlin</a> +{' '}
          <a href="https://spring.io/">Spring</a> backend to handle authentication and process data.
        </li>
        <li>
          Worked on scalable testing harness in Node.js +{' '}
          <a href="https://expressjs.com/">Express</a> to dynamically mock an API server across
          multiple regions.
        </li>
        <li>
          Built <a href="https://jenkins.io/">Jenkins</a> continuous integration/delivery pipeline
          for the above projects to ensure code quality and alert engineers of ongoing changes.
        </li>
      </ul>
      <p>
        I wrote rigorous unit and integration tests for all of my code, and continually collaborated
        with other interns, engineers, and the product owner.
      </p>
    </div>
  ),
  moreButtons: [
    {
      icon: 'fas fa-server',
      name: 'NetMaster product info',
      url: 'https://www.ca.com/us/products/ca-netmaster-network-management-tcpip.html',
    },
  ],
  resume: {
    ord: 2,
    description: (
      <span>
        Contributed to <i>Angular</i> frontend, <i>Kotlin</i> + <i>Spring</i> backend, and{' '}
        <i>Node.js</i> scalable server testing harness for the Mainframe Team Center as part of an
        agile team.
      </span>
    ),
    extra: 'Broadcom',
  },
};
