import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { blocks } from '../assets/data';
import { scrollProps } from '../util';

export const ResumeTabs: React.FC = () => (
  <nav className="tabs is-small is-centered">
    <div className="container">
      <ul>
        <li>
          <ScrollLink to="education" {...scrollProps}>
            Education
          </ScrollLink>
        </li>
        {blocks.map(section => (
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
    </div>
  </nav>
);
