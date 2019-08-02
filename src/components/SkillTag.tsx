import React from 'react';
import pluralize from 'pluralize';

import { Skill } from '../interfaces';
import { DropdownList } from './DropdownList';

export const SkillTag: React.FC<Skill> = ({ name, icon, url, years }) => {
  return (
    <DropdownList>
      <a className="tag is-medium tooltip" data-tooltip={pluralize('year', years, true)}>
        <div className="columns is-variable is-1 is-mobile">
          {icon && (
            <div className="column is-narrow">
              <span className="icon">
                <i className={icon} />
              </span>
            </div>
          )}
          <div className="column">{name}</div>
        </div>
      </a>
    </DropdownList>
  );
};
