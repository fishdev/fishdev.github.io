import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { blocks } from '../../../assets/data';
import { scrollProps } from '../../../core';

export const ResumeTabs: React.FC = ({ children }) => (
  <div className="container">
    <div className="columns is-mobile is-centered is-vcentered">
      <div className="column is-narrow">
        <nav className="tabs is-small is-centered">
          <ul>
            <li>
              <ScrollLink to="education" {...scrollProps}>
                Education
              </ScrollLink>
            </li>
            {blocks.map((section) => (
              <li key={section.name}>
                <ScrollLink to={section.name} {...scrollProps}>
                  {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                </ScrollLink>
              </li>
            ))}
            <li>
              <ScrollLink to="skills" {...scrollProps}>
                Skills
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
      {React.Children.map(children, (child) => (
        <div className="column is-narrow">{child}</div>
      ))}
    </div>
  </div>
);
