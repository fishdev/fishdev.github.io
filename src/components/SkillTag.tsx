import React from 'react';
import pluralize from 'pluralize';

import { Skill } from '../interfaces';

export const SkillTag: React.FC<Skill> = ({ name, icon, url, years }) => {
  const TagElement = url ? 'a' : 'div';
  return (
    <TagElement
      className="tag is-medium tooltip"
      data-tooltip={pluralize('year', years, true)}
      href={url}>
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
    </TagElement>
  );
};
