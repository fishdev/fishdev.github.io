import React from 'react';

import { Banner } from '../../../core';

export const codes: Banner[] = [
  {
    title: 'TypeScript',
    subtitle: 'JS without the insanity',
    content: (
      <React.Fragment>
        <p>
          I love the versatility and multi-paradigm nature of JavaScript but its dynamic type system
          makes large, data-intensive applications mind-numbingly difficult to work with.
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
          management. It also has a really nice standard library and can build projects into
          cross-platform binaries.
        </p>
      </React.Fragment>
    ),
    image: {
      original: 'https://cdn-images-1.medium.com/max/1200/1*mUjcwJ7INewkUIVWFJVRUA.jpeg',
      description: 'Gophers',
    },
    flipped: true,
  },
  {
    title: 'Redux',
    subtitle: 'Beautiful client-side architecture',
    content: (
      <React.Fragment>
        <p>
          Inspired by <a href="https://facebook.github.io/flux/">Flux</a> from Facebook,{' '}
          <a href="https://redux.js.org/">Redux</a> is an application paradigm that makes it easy to
          deal with complex data models that update in real-time.
        </p>
        <p>
          I love writing apps with Redux because of how clean it feels. There are great libraries
          like <a href="https://github.com/reduxjs/reselect">reselect</a> and{' '}
          <a href="https://github.com/redux-utilities/redux-actions">redux-actions</a> to improve
          performance and reduce boilerplate.
        </p>
      </React.Fragment>
    ),
    image: {
      original: 'https://miro.medium.com/max/2880/1*n49UEh_U3iEqPHpp8eSSUw.png',
      description: 'Redux.js',
    },
  },
  {
    title: 'Terminal and editor',
    content: (
      <React.Fragment>
        <p>
          I use <a href="https://ohmyz.sh/">(oh my) zsh</a> with a pretty minimal config on{' '}
          <a href="https://iterm2.com/">iTerm</a>. Here are some handy command-line utilities I
          like:
          <ul>
            <li>
              <a href="https://httpie.org/">HTTPie</a> – basically Postman in your terminal
            </li>
            <li>
              <a href="https://github.com/clvv/fasd">fasd</a> – guesses paths to files and
              directories
            </li>
            <li>
              <a href="https://hub.github.com/">hub</a> – a GitHub wrapper for git
            </li>
            <li>
              <a href="https://github.com/peco/peco">peco</a> – interactive alternative to grep
              (written in Go!)
            </li>
          </ul>
        </p>
        <p>
          Like many, <a href="https://code.visualstudio.com/">Visual Studio Code</a> is my editor of
          choice. Along with the usual language packs, there are a couple other extensions that
          improve my workflow:
          <ul>
            <li>
              <a href="https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils">
                File Utils
              </a>{' '}
              – command palette items for file operations (honestly, this should be included)
            </li>
            <li>
              <a href="https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree">
                TODO Tree
              </a>{' '}
              – comprehensive to-do comment manager, much like IntelliJ
            </li>
            <li>
              <a href="https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks">
                Bookmarks
              </a>{' '}
              – a powerful way to jump around files instead of relying on cursor history
            </li>
            <li>
              <a href="https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop">
                LaTeX Workshop
              </a>{' '}
              – turns VS Code into a full-fledged LaTeX editor with built-in PDF previews
            </li>
          </ul>
        </p>
      </React.Fragment>
    ),
  },
];
