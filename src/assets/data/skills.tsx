import React from 'react';

import { Skill } from '../../resume';

export const languages: Skill[] = [
  {
    id: 'js',
    name: 'Javascript',
    icon: 'fab fa-js',
    year: 2012,
    description: (
      <p>
        Including <a href="https://nodejs.org/en/">Node.js</a> and{' '}
        <a href="https://www.typescriptlang.org/">TypeScript</a>
      </p>
    ),
  },
  {
    id: 'html',
    name: 'HTML',
    icon: 'fab fa-html5',
    year: 2011,
    description: 'Responsive mobile UI design and templating with logic',
  },
  {
    id: 'css',
    name: 'CSS',
    icon: 'fab fa-css3',
    year: 2012,
    description: (
      <p>
        Including <a href="https://sass-lang.com/">SASS</a> and{' '}
        <a href="http://lesscss.org/">LESS</a>
      </p>
    ),
  },
  {
    id: 'py',
    name: 'Python',
    icon: 'fab fa-python',
    year: 2011,
    description: 'Web development and scripting',
  },
  {
    id: 'java',
    name: 'Java',
    icon: 'fab fa-java',
    year: 2013,
    description: (
      <p>
        Including <a href="https://kotlinlang.org/">Kotlin</a>,{' '}
        <a href="https://www.scala-lang.org/">Scala</a>, and{' '}
        <a href="https://groovy-lang.org/">Groovy</a>
      </p>
    ),
  },
  {
    id: 'bash',
    name: 'Bash',
    year: 2011,
    description: 'Including zsh and fish',
  },
  {
    id: 'c',
    name: 'C',
    year: 2017,
  },
];

export const technologies: Skill[] = [
  {
    id: 'git',
    name: 'Git',
    year: 2013,
    icon: 'fab fa-git-alt',
    description: 'Workflows such as feature branching, Git-flow, and forking',
  },
  {
    id: 'linux',
    name: 'Linux',
    year: 2011,
    icon: 'fab fa-linux',
    description: (
      <p>
        Configuration and virtualization on distros such as <a href="https://ubuntu.com/">Ubuntu</a>{' '}
        and <a href="https://www.archlinux.org/">Arch</a>
      </p>
    ),
  },
  {
    id: 'express',
    name: 'Express',
    url: 'https://expressjs.com',
    year: 2015,
    description: <p>Building parallel, real-time web servers with multiple databases</p>,
  },
  {
    id: 'django',
    name: 'Django',
    url: 'https://www.djangoproject.com/',
    year: 2018,
    description: <p>Including websockets (channels) and Django ORM</p>,
  },
  {
    id: 'react',
    name: 'React',
    url: 'https://reactjs.org/',
    year: 2016,
    icon: 'fab fa-react',
    description: (
      <p>
        Including <a href="https://facebook.github.io/react-native/">React Native</a>
      </p>
    ),
  },
  {
    id: 'angular',
    name: 'Angular',
    url: 'https://angular.io/',
    year: 2018,
    icon: 'fab fa-angular',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    url: 'https://getbootstrap.com/',
    year: 2013,
    icon: 'fab fa-bootstrap',
  },
  {
    id: 'mongo',
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    year: 2015,
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    year: 2017,
  },
  {
    id: 'redis',
    name: 'Redis',
    url: 'https://redis.io/',
    year: 2016,
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    url: 'https://jenkins.io/',
    year: 2019,
    icon: 'fab fa-jenkins',
    description: 'Declarative and scripted pipelines',
  },
];
