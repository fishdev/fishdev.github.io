import React from 'react';

import { Skill } from '../../interfaces';

export const languages: Skill[] = [
  {
    id: 'js',
    name: 'Javascript',
    icon: 'fab fa-js',
    years: 7,
    description: (
      <span>
        Including <a href="https://nodejs.org/en/">Node.js</a> and{' '}
        <a href="https://www.typescriptlang.org/">TypeScript</a>
      </span>
    ),
  },
  {
    id: 'html',
    name: 'HTML',
    icon: 'fab fa-html5',
    years: 7,
    description: 'Responsive mobile UI design and templating with logic',
  },
  {
    id: 'css',
    name: 'CSS',
    icon: 'fab fa-css3',
    years: 7,
    description: (
      <span>
        Including <a href="https://sass-lang.com/">SASS</a> and{' '}
        <a href="http://lesscss.org/">LESS</a>
      </span>
    ),
  },
  {
    id: 'py',
    name: 'Python',
    icon: 'fab fa-python',
    years: 7,
    description: 'Web development and scripting',
  },
  {
    id: 'java',
    name: 'Java',
    icon: 'fab fa-java',
    years: 5,
    description: (
      <span>
        Including <a href="https://kotlinlang.org/">Kotlin</a>,{' '}
        <a href="https://www.scala-lang.org/">Scala</a>, and{' '}
        <a href="https://groovy-lang.org/">Groovy</a>
      </span>
    ),
  },
  {
    id: 'c',
    name: 'C',
    years: 3,
  },
];

export const technologies: Skill[] = [
  {
    id: 'git',
    name: 'Git',
    years: 6,
    icon: 'fab fa-git-alt',
    description: 'Workflows such as feature branching, Git-flow, and forking',
  },
  {
    id: 'bash',
    name: 'Bash',
    years: 8,
    description: 'Including zsh and fish',
  },
  {
    id: 'linux',
    name: 'Linux',
    years: 8,
    icon: 'fab fa-linux',
    description: (
      <span>
        Configuration and virtualization on distros such as <a href="https://ubuntu.com/">Ubuntu</a>{' '}
        and <a href="https://www.archlinux.org/">Arch</a>
      </span>
    ),
  },
  {
    id: 'express',
    name: 'Express',
    url: 'https://expressjs.com',
    years: 4,
    description: <span>Building parallel, real-time web servers with multiple databases</span>,
  },
  {
    id: 'django',
    name: 'Django',
    url: 'https://www.djangoproject.com/',
    years: 2,
    description: <span>Including websockets (channels) and Django ORM</span>,
  },
  {
    id: 'react',
    name: 'React',
    url: 'https://reactjs.org/',
    years: 4,
    icon: 'fab fa-react',
    description: (
      <span>
        Including <a href="https://facebook.github.io/react-native/">React Native</a>
      </span>
    ),
  },
  {
    id: 'angular',
    name: 'Angular',
    url: 'https://angular.io/',
    years: 2,
    icon: 'fab fa-angular',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    url: 'https://getbootstrap.com/',
    years: 6,
    icon: 'fab fa-bootstrap',
  },
  {
    id: 'mongo',
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    years: 4,
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    years: 3,
  },
  {
    id: 'redis',
    name: 'Redis',
    url: 'https://redis.io/',
    years: 3,
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    url: 'https://jenkins.io/',
    years: 1,
    icon: 'fab fa-jenkins',
    description: 'Declarative and scripted pipelines',
  },
];
