import React from 'react';

export const stripe = {
  id: 'stripe',
  name: 'Software Engineering Intern',
  extra: 'Stripe',
  range: {
    start: {
      month: 5,
      year: 2020,
    },
    end: {
      month: 8,
      year: 2020,
    },
  },
  description: (
    <p>
      Developed infrastructure to internationalize support articles and search engine. Helped
      automate localization workflow. Collaborated with other engineers and reviewed merge requests
      for other projects.
    </p>
  ),
  info: (
    <div>
      <p>
        I interned for 12 weeks at <a href="https://stripe.com">Stripe</a> on the
        internationalization team under the merchant core experience pillar. My responsibilities:
      </p>
      <ul>
        <li>
          Developed a flexible system to make Stripe support articles and docs search engine
          available in multiple languages, resulting in potential annual savings of up to $1M.
        </li>
        <li>
          Revamped translation validation mechanism to automate quality assurance checks on
          localized strings across Stripe.
        </li>
        <li>
          Collaborated with team members and other engineers on Ruby and React code and
          Elasticsearch configuration. Reviewed merge requests for various internationalization
          projects.
        </li>
      </ul>
      <p>
        Over the summer, I worked with the <a href="https://puma.io">Puma</a> web server for Ruby,{' '}
        <a href="https://sorbet.org">Sorbet</a>, React,{' '}
        <a href="https://www.elastic.co/elasticsearch/">Elasticsearch</a> language analyzers, and{' '}
        <a href="https://puppet.com">Puppet</a>. I will be returning to Stripe for summer 2021.
      </p>
    </div>
  ),
  resume: {
    ord: 0,
    description: (
      <span>
        Developed <i>Ruby</i> infrastructure to internationalize support articles and{' '}
        <i>Elasticsearch</i> engine. Helped automate localization workflow across Stripe.
      </span>
    ),
    extra: 'Stripe',
  },
};
