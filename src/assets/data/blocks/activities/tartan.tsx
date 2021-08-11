import React from 'react';

export const tartan = {
  id: 'tartan',
  name: 'The Tartan',
  extra: 'Science & Technology Editor',
  range: {
    start: {
      month: 9,
      year: 2018,
    },
    end: {
      month: 9,
      year: 2020,
    },
  },
  buttons: [
    {
      url: 'https://thetartan.org',
      icon: 'fas fa-newspaper',
      name: 'Online edition',
    },
    {
      url: 'https://thetartan.substack.com',
      icon: 'fas fa-rss',
      name: 'Newsletter',
    },
  ],
  description: <p>Writing and editing articles, designing weekly paper layout.</p>,
  info: (
    <div>
      <p>
        <i>The Tartan</i> is Carnegie Mellon's student newspaper. As the editor of the Science &
        Technology section, I have drawn upon my experience as an editor and webmaster of my high
        school student newspaper. Specific responsibilities:
      </p>
      <ul>
        <li>Setting topics and for staff writers every week.</li>
        <li>Revising articles and coordinating with writers regarding scheduling.</li>
        <li>
          Designing 2-3 pages of paper layout using{' '}
          <a href="https://www.adobe.com/products/indesign.html">Adobe InDesign</a>.
        </li>
        <li>Writing 1-2 articles about a STEM-related news event.</li>
        <li>Outreach to recruit new writers and copy editors.</li>
      </ul>
    </div>
  ),
  resume: {
    ord: 3,
    description: (
      <span>
        <u>Editor for SciTech</u> section. Writing and editing articles, designing weekly paper.
      </span>
    ),
  },
};
