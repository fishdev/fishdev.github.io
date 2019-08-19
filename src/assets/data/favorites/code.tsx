import React from 'react';

import { Banner } from '../../../interfaces';

export const codes: Banner[] = [
  {
    title: 'TypeScript',
    subtitle: 'JS without the insanity',
    content: (
      <React.Fragment>
        <p>
          I love the versatiltiy and multi-paradigm nature of JavaScript but it's dynamic type
          system makes it mind-numbingly difficult to work with in large data-intensive
          applications.
        </p>
        <p>
          With <a href="https://www.typescriptlang.org/">TypeScript</a>, I can take advantage of the
          rich JavaScript ecosystem along with some object-oriented features like interfaces as well
          as better code completion and bug-catching.
        </p>
      </React.Fragment>
    ),
    image: {
      original:
        'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Fremojansen%2Flogo.ts%2Fmaster%2Fts.png&f=1',
      description: 'TS',
    },
  },
  {
    title: 'Golang',
    content: (
      <React.Fragment>
        <p>
          Although C/C++ have been around forever, they're annoying to compile and I don't like how
          they deal with parallelism.
        </p>
        <p>
          <a href="https://golang.org/">Go</a> solves that with built-in threads and memory
          management. It also has a really nice standard library and can build projects into a
          cross-platform binary.
        </p>
      </React.Fragment>
    ),
    image: {
      original: 'https://cdn-images-1.medium.com/max/1200/1*mUjcwJ7INewkUIVWFJVRUA.jpeg',
      description: 'Gophers',
    },
    flipped: true,
  },
];
