import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { blocks } from '../assets/data';

export const ResumeTabs: React.FC = () => (
  <nav className="tabs is-small is-centered">
    <div className="container">
      <ul>
        <li>
          <ScrollLink to="education" smooth={true} offset={-10}>
            Education
          </ScrollLink>
        </li>
        {blocks.map(section => (
          <li key={section.name}>
            <ScrollLink to={section.name} smooth={true} offset={-10}>
              {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
            </ScrollLink>
          </li>
        ))}
        <li>
          <ScrollLink to="skills" smooth={true} offset={-10}>
            Skills
          </ScrollLink>
        </li>
      </ul>
    </div>
  </nav>
);
